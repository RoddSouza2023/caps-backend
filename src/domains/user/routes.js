const express = require("express");
const router = express.Router();
const { createNewUser, authenticateUser } = require("./controller");
const auth = require("./../../middleware/auth");
const { sendVerificationOTPEmail } = require("./../email_verification/controller");
const jwt_decoder = require('jwt-decode');
const User = require('./model');
const { hashData } = require("../../util/hashData");
const emailValidator = require('deep-email-validator');

//protected route
router.get("/private_data", auth, (req,res) => {
  res
    .status(200)
    .send(`You're logged in as ${req.currentUser.email}`);
});

router.get("/getAll", async (req,res) => {
  const userData = await User.find({});

  res.send(userData);
});

//SignIn
router.post("/", async (req, res) => {
  try {
    let { email, password } = req.body;
    email = email.toLowerCase().trim();
    password = password.trim();

    let response = {
      success: false,
      error: false,
    }

    if(!(email && password)) {
      response['error'] = "Empty credentials provided. Please enter all fields.";
    }
    
    const authenticadteUser = await authenticateUser({ email, password });

    if (!authenticadteUser.success) {
      response.error = authenticadteUser.error;
      res.status(401).json(response);
      return;
    }
    
    if (authenticadteUser.success) {
      response.success = true;
      response['message'] = "Successful login!";
      response['user'] = authenticadteUser.user;
      res.status(200).json(response);
    } else {
      if (!response.error) response["error"] = authenticadteUser.error;
      res.status(400).json(response);
    }

  } catch (error) {
    res.status(400).send(error.message);
  }
});

//SignUp
router.post("/signup", async (req, res) => {
  try {

    let response = {
      success: false,
      error: false,
    }

    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      response.success = false;
      response.error = 'Please fill out all fields!';
      res.status(403).json(response);
      return;
    }
    //use deep validator to see if email is valid 
    const validated = await emailValidator.validate(email);

    email = email.toLowerCase();

    const fetchedUser = await User.findOne({ email });
    
    if (fetchedUser) {
      response.error = "Email already on file. Please login or reset password."
      res.status(400).json(response);
      return;
    }
    
    if (!(name && email && password)) {
      response.error = "Empty input fields!";
      res.status(400).json(response);
    } else {
      name = name.trim();
      email= email.trim();
      password = password.trim();

      if (!/^[a-zA-Z ]*$/.test(name)) {
        response.error = "Invalid name entered";
        res.status(400).json(response);
        return;
      } else if (!validated.valid) {
        response.error = "Invalid email entered";
        res.status(400).json(response);
        return;
      } else if (password.length < 8) {
        response.error = "Password is too short";
        res.status(400).json(response);
        return;
      } else {
        //conditions met, create user
        const newUser = await createNewUser({
          name,
          email,
          password,
        });

        response.success = true;
        response['newUser'] = newUser;
        response['message'] = "User successfully registered. Please confirm email to login.";
        sendVerificationOTPEmail(email);
        
        res.status(200).json(response);
      }
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//get user profile/details
router.post("/get_user_details", auth, async (req, res) => {
  try {
    let response = {
      success: false,
      error: false,
    }

    const { token } = req.body;

    const { userId } = jwt_decoder(token);
    const fetchedUser = await User.findOne({ _id: userId });

    if (!fetchedUser) {
      response.error = "No user data found";
      res.status(404).json(response);
      return;
    }

    const { name, email } = fetchedUser;

    response.success = true;
    //set up data sent on request
    response["userDetails"] = { name: name, email: email};
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//change user password
router.post("/change_password", auth, async (req, res) => {
  try {
    let response = {
      success: false,
      error: false,
    }

    const { token, currentPassword, newPassword } = req.body;

    if (!newPassword || !currentPassword) {
      response.error = "Please fill out all fields!";
      res.status(400).json(response);
      return;
    }

    if (newPassword.length < 8) {
      response.error = "Password must be at least 8 characters";
      res.status(409).json(response);
      return;
    }

    if (currentPassword === newPassword) {
      response.error = "New password must be different than current";
      res.status(409).json(response);
      return;
    }

    const { userId } = jwt_decoder(token);
    const fetchedUser = await User.findOne({ _id: userId });

    if (!fetchedUser) {
      response.error = "No user data found";
      res.status(404).json(response);
      return;
    }

    const userRequest = {
      email: fetchedUser.email,
      password: currentPassword,
    }

    const matchedUserPassword = await authenticateUser(userRequest);

    if(!matchedUserPassword.success) {
      response.error = "Current password doesn't match profile. Passwords are case sensitive.";
      res.status(409).json(response);
      return;
    }

    const newHashedPassword = await hashData(newPassword);
    await User.updateOne({ _id: userId}, { $set: {password: newHashedPassword }});

    response.success = true;
    response["message"] = "Password updated successfully";
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//USER CART METHODS *************************

//Add items to cart
router.patch("/cart/add", async (req, res) => {
  try {

    let response = {
      success: false,
      error: false,
    }

    const { item, token } = req.body;

    if (!token) {
      response['message'] = "Guest cart updated";
      res.status(200).json(response);
      return;
    }
    //decode token to get user from DB
    const { userId } = jwt_decoder(token);

    const existingGame = await User.findOne({ _id: userId, "cart.id": item.id });
    
    //check if exiting game in cart already, if so add to quantity
    if (existingGame) {
      const quantity = parseInt(existingGame.cart.find((game) => item.id === game.id ).quantity) + 1;
      const serverResponse = await User.updateOne({ _id: userId, "cart.id": item.id  }, { $set: { "cart.$.quantity": quantity } });
      response.success = true;
      response["server_response"] = serverResponse;
      res.status(200).json(response);
      return;
    }

    const serverResponse = await User.updateOne({ _id: userId }, { $push: { "cart": item } });

    if (!serverResponse) {
      response.error = "Failed to add item!";
      res.status(404).json(response);
      return;
    }

    response.success = true;
    response['database_response'] = serverResponse;
    response['message'] = `Cart updated, added: ${item?.name}`;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//Update item quantity
router.patch("/cart/item_quantity", async (req, res) => {
  try {
    let response = {
      success: false,
      error: false,
    }

    const { item, token } = req.body;
    const { id, quantity } = item;

    if (!token) {
      response['message'] = "Guest cart updated";
      res.status(200).json(response);
      return;
    }
    //decode token to get user from DB
    const { userId } = jwt_decoder(token);

    const serverResponse = await User.updateOne({ _id: userId, "cart.id": id  }, { $set: { "cart.$.quantity": quantity } });

    if (!serverResponse) {
      response.error = "Failed to update field!";
      res.status(404).json(response);
      return;
    }

    response.success = true;
    response["message"] = "Quantity updated successfully";
    response["server_response"] = serverResponse;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//remove all items from cart 
router.patch("/remove_all_cart", async (req, res) => {
  try {
    let response = {
      success: false,
      error: false,
      removedItems: [],
    }

    const token = req.body.token;

    const { userId } = jwt_decoder(token);

    const itemsRemoved = await User.findById({ _id: userId });

    if (!itemsRemoved) {
      response.error = "Failed to find user in Database";
      res.status(404).json(response);
      return;
    }

    response.removedItems = itemsRemoved.cart;

    const serverResponse = await User.updateOne({ _id: userId }, { $set: { "cart" : [] } });

    if (!serverResponse) {
      response.error = "Failed to complete request";
      res.status(500).json(response);
      return;
    }

    response.serverResponse = serverResponse;
    response.success = true;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//remove item from cart
router.patch("/cart/remove", async (req, res) => {
  try {
    let response = {
      success: false,
    }

    const token = req.body.token;

    const { userId } = jwt_decoder(token);
    const id = req.body.item?.id;

    const serverResponse = await User.updateOne( { _id: userId }, { $pull: { "cart": { id: id } } });

    response.success = true;
    response['server_response'] = serverResponse;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//get items with user token
router.post("/cart/getItems", async (req, res) => {
  try {
    let response = {
      success: false,
      error: false,
    }

    const { token } = req.body;
    const { userId } = jwt_decoder(token);
    const { cart } = await User.findOne({ _id: userId });

    response.success = true;
    response['cart'] = cart;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;