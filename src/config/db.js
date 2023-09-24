require("dotenv").config();
const mongoose = require("mongoose");

//uri
const { MONGODB_URI, PORT } = process.env;

const connectToDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology :true,
    });
    console.log("Database Connected on PORT: " + PORT);
  } catch (error) {
    console.log(error);
  }
}

connectToDB();

//https://www.youtube.com/watch?v=TFWuG4qTqIE part9 left off