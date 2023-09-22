const express = require('express');
const router = express.Router();

router.get("/", async (req, res) => {
  res.send(products);
});

router.post("/", async (req, res) => {
  try {
    const product = req.body;

    res.status(200).json(product);
  } catch (error) {
    res.status(400).send(error.message);
  }
});