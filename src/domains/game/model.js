const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GameSchema = new Schema({
  slug: String,
  name: String,
  released: Date,
  tba: Boolean,
  background_image: String,
  rating: Number,
  rating_top: Number,
  ratings: Array,
  ratings_count: Number,
  reviews_text_count: Number,
  added: Number, 
  added_by_status: Object,
  metacritic: Number,
  playtime: Number,
  suggestions_count: Number,
  updated: Date,
  user_game: String || null,
  reviews_count: Number,
  saturated_color: String,
  dominant_color: String,
  platforms: Array,
  parent_platforms: Array,
  genres: Array,
  stores: Array,
  clip: String || null,
  tags: Array,
  esrb_rating: Object,
  short_screenshots: Array,
});

const Game = mongoose.model("Game", GameSchema);

module.exports = Game;