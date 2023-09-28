const express = require("express");
const router = express.Router();
const { sendVerificationOTPEmail, verifyUserEmail } = require("./controller");
const User = require("./../user/model");

router.post("/verify", async (req,res) => {
  try {
    let { email, otp } = req.body;
    email = email.toLowerCase();

    let response = {
      success: false,
      error: false,
    }

    const user = await User.findOne({ email });

    if (user) {
      if (user.verified) {
        response.success = true;
        response['message'] = "User already verified. You may login.";
        res.status(200).json(response);
        return;
      }
    } else {
        response.error = "No user found with this email. Please register first.";
        res.status(404).json(response);
        return;
    }

    if(!(email && otp)) {
      response.error = "Empty otp details are not allowed!";
      res.status(400).json(response);
      return;
    };

    const verification = await verifyUserEmail({ email, otp });

    if (verification.error) {
      response.error = verification.error;
      res.status(400).json(response);
      return;
    }

    response.success = true;
    response['message'] = verification.message;

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//request new verification otp
router.post("/", async (req, res) => {
  try {
    const { email } = req.body;

    let response = {
      success: false,
      error :false,
    }

    const userInDatabase = await User.findOne({ email });
    console.log(userInDatabase);

    if (!userInDatabase) {
      response.error = "No user registered with that email.";
      res.status(404).json(response);
      return;
    } 

    if (userInDatabase.verified) {
      response.error = "User already verified.";
      res.status(400).json(response);
      return;
    }

    if (!email) {
      response.error = "An email is required!";
      res.status(400).json(response);
      return;
    }

    await sendVerificationOTPEmail(email);
    response.success = true;
    response["message"] = "Code sent. Please check your inbox.";

    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;