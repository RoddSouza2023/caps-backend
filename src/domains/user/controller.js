const User = require("./model");
const { hashData, verifyHashedData } = require("./../../util/hashData");
const createToken = require("./../../util/createToken");

const authenticateUser = async (data) => {
  try {
    const { email, password } = data;

    let response = {
      success: false,
    };
    
    //look for user in database
    const fetchedUser = await User.findOne(
      { email }
    )

    if (!fetchedUser) {
      response["error"] = "Email provided is invalid!";
      return response;
    }

    //check if email has been verified
    if (!fetchedUser.verified) {
      response["user"] = fetchedUser;
      response["error"] = "Email hasn't been verified. Please check your inbox";
      return response;
    }

    //verify password matches data in profile
    const hashedPassword = fetchedUser.password;
    const passwordMatch = await verifyHashedData(password, hashedPassword);

    if (!passwordMatch) {
      response["error"] = "Invalid password! Try again or reset password";
      return response;
    }

    //set user token
    const tokenData = { userId: fetchedUser._id, email}
    const token = await createToken(tokenData);

    fetchedUser.token = token;

    //successful request, set up response 
    response["user"] = fetchedUser;
    response.success = true;

    return response;

  } catch (error) {
    throw error;
  }
};

const createNewUser = async (data) => {
  try {
    const { name, email, password } = data;

    //Checking if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw Error("User with that email already exists");
    }

    //hash password
    const hashedPassword = await hashData(password);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    const createdUser = await newUser.save();

    return createdUser;

  } catch (error) {
    throw error;
  }
};

module.exports = { createNewUser, authenticateUser };