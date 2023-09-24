const express = require("express");
const router = express.Router();
const { sendVerificationOTPEmail, verifyUserEmail } = require("./controller");
const User = require("./../user/model");

router.post("/verify", async (req,res) => {
  try {
    let { email, otp } = req.body;

    let response = {
      success: false,
      error: false,
    }

    const user = await User.findOne({ email: { $regex: new RegExp(email, "i") } });

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
      res.status(400).json(verification.error);
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

    if (!email) {
      throw Error("An email is required!");
    }

    const createdEmailVerificationOTP = await sendVerificationOTPEmail(email);
    res.status(200).json(createdEmailVerificationOTP);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;