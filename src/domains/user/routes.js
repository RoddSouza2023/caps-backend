const express = require("express");
const router = express.Router();
const { createNewUser, authenticateUser } = require("./controller");
const auth = require("./../../middleware/auth");
const { sendVerificationOTPEmail } = require("./../email_verification/controller");
const jwt_decoder = require('jwt-decode');
const User = require('./model');

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
    let { name, email, password } = req.body;
    email = email.toLowerCase();

    const fetchedUser = await User.findOne({ email });

    let response = {
      success: false,
      error: false,
    }
    
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
      } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        response.error = "Invalid email entered";
      } else if (password.length < 8) {
        response.error = "Password is too short";
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

//Add items to cart
router.patch("/cart", async (req, res) => {
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

//remove item from cart
router.delete("/cart", async (req, res) => {
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