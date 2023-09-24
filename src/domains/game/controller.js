const Game = require("./model"); 

const createGame = async (data) => {
  try {
    const { slug } = data;
  
    //Check if game exists
    const existingGame = await Game.findOne({ slug });
  
    if (existingGame) {
      throw Error("Game is already in Database");
    }
  
    const newGame = new Game(data);
  
    const createdGame = await newGame.save();
  
    return createdGame;
  } catch (error) {
    throw error;
  }
};

module.exports = { createGame };