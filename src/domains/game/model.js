const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  slug: String,
  name: String,
  name_original: String,
  price: Number,
  genres: Array,
  platforms: Array,
  parent_platforms: Array,
  description: String,
  metacritic: Number,
  metacritic_platforms: Array,
  released: Date,
  tba: Boolean,
  updated: Date,
  background_image: String,
  background_image_additional: String,
  website: String,
  rating: Number,
  rating_top: Number,
  ratings: Object,
  reactions: Object,
  added: Number,
  added_by_status: Object,
  playtime: Number,
  screenshots_count: Number,
  short_screenshots: Array, 
  ratings_count: Number,
  suggestions_count: Number,
  alternative_names: Array,
  metacritic_url: String,
  parents_count: Number,
  esrb_rating: Object,
  platforms: Array
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;