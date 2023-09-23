const express = require("express");
const router = express.Router();
const { createNewUser, authenticateUser } = require("./controller");
const auth = require("./../../middleware/auth");
const { sendVerificationOTPEmail } = require("./../email_verification/controller");
const User = require('./model');
const jwt = require('jsonwebtoken');

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
    email = email.trim();
    password = password.trim();

    let response = {
      success: false,
      error: false,
    };

    if(!(email && password)) {
      response['error'] = "Empty credentials provided. Please enter all fields.";
    }
    
    const authenticadteUser = await authenticateUser({ email, password });

    
    if (authenticadteUser.success) {
      const token = authenticadteUser.user.token;
      
      //pass token to cookie
      res.cookie("token", token, {
        path: "/",
        maxAge: 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: false,
        secure: true,
      });

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

//auto sign in
router.get("/autoLogin", (req, res) => {
  const token = req.headers.cookie;

  let response = {
    success: false,
  };

  if (token === 'token=j%3Anull' || !token) {
    res.status(401).json(response);
  } else {
    response['success'] = true;
    response.token = token?.substring(6);
    res.json(response);
  }
});

//logout
router.get("/logout", (req, res) => {
  try {
    res.clearCookie('token');
  
    res.send({logoutSuccess: true});
  } catch (error) {
    res.send(error.message);
  }
});

//SignUp
router.post("/signup", async (req, res) => {
  try {
    let { name, email, password } = req.body;
    name = name.trim();
    email= email.trim();
    password = password.trim();

    if (!(name && email && password)) {
      throw Error("Empty input fields!");
    } else if (!/^[a-zA-Z ]*$/.test(name)) {
      throw Error("Invalid name entered");
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      throw Error("Invalid email entered");
    } else if (password.length < 8) {
      throw Error("Password is too short");
    } else {
      //conditions met, create user
      const newUser = await createNewUser({
        name,
        email,
        password,
      });
      sendVerificationOTPEmail(email);
      res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;