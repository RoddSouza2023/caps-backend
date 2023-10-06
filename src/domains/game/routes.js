const express = require('express');
const router = express.Router();
const Game = require('./model');
const { createGame } = require('./controller');

//post game
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newGame = await createGame(data);

    res.json(newGame);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

//filter data provided
router.get("/all", async (req, res)=>{
  let response = {
    success: false,
    error: false,
  }

  let gameQuery = {};

  //verify valid query options and implement to gameQuery object
  const { genres, platforms, ordering, search } = req.query;
  if (genres) { 
    gameQuery["genres.id"] = +genres;
  }
  
  if (platforms) { 
    gameQuery["parent_platforms.platform.id"] = +platforms;
  }

  if (search) { 
    gameQuery = {};
    gameQuery["name"] = { $regex: new RegExp(search, 'i') };
  }
  //set up the number of documents that are skipped and the limit of documents retrieved
  
  let games;

  if (ordering) { 
    let order = 1;
    let criteria = ordering;
    //check if order is reversed from greatest to least
    if (ordering[0] === '-') {
      order = -1;
      criteria = ordering.substring(1);
    }
    //dynamic criteria key
    let sortObject = { [criteria]: order };
    games = await Game.find().sort(sortObject);
  }

  games = await Game.find(gameQuery);

  response.success = true;
  response["games"] = games || [];

  res.status(200).json(response);
});

//get game by slug
router.get("/:slug", async (req, res) => {
  try {
    const { slug } = req.params;
  
    let response = {
      success: false,
      error: false,
      game: {},
    }
  
    const game = await Game.findOne({ slug });
  
    if (!game) {
      response.error = "Problem retrieving game data";
      res.status(404).json(response);
      return;
    }
  
    response.game = game;
    res.status(200).json(response);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;