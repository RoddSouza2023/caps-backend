const User = require("./../user/model");
const { sendOTP } = require("./../otp/controller");

const sendPasswordResetOTPEmail = async (email) => {
  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      throw Error("There's no account with that email in our system.");
    }

    if (!existingUser.verified) {
      throw Error("Email has not been verified. Please check your inbox.");
    }
 
    const otpDetails = {
      email,
      subject: "password Reset",
      message: "Enter the code below to reset your password",
      duration: 1,
    };

    const createdOTP = await sendOTP(otpDetails);
    return createdOTP;
  } catch(error) {
    throw error;
  }
};

module.exports = { sendPasswordResetOTPEmail };