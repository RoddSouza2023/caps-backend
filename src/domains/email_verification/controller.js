const User = require("./../user/model");
const { sendOTP, verifyOTP, deleteOTP } = require("./../otp/controller");

 const verifyUserEmail = async ({ email, otp }) => {
  try {

    let response = {
      success: false,
      error: false,
    }

    const validOTP = await verifyOTP({ email, otp });

    if(!validOTP.success) {
      response.error = validOTP.error;
    }

    //update user record to verify email
    await User.updateOne({ email }, { verified: true });
    await deleteOTP(email);

    response.success = true,
    response['message'] = "Email successfully confirmed!";

    return response;
  } catch (error) {
    throw error;
  }
 };

const sendVerificationOTPEmail = async (email) => {
  try {
    //check if account exists
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      throw Error("There is no account for the entered email.")
    }

    const otpDetails = {
      email,
      subject: "Email Verification",
      message: "Verify your email with the code below",
      duration: 1,
    }

    const createdOTP = await sendOTP(otpDetails);
    return createdOTP;
  } catch (error) {
    throw error;
  }
};

module.exports = { sendVerificationOTPEmail, verifyUserEmail };