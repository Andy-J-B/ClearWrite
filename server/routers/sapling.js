/*
 *** sapling.js
 ***
 *** Description : API used for 3 features :
 ***               Rephrasing the text using different mapping like informal to formal, etc.
 ***               Detecting the AI in the text
 ***               Sentiment analysis of the text and provide the tone of the text
 */

// Import necessary modules

const express = require("express");
const router = express.Router();

const saplingController = require("../controller/saplingController");

// Load environmental variables

if (process.env.NODE_ENV === "test") {
  jest.mock("axios");
}
// Features of the API
// 1. Rephrasing
router.post("/rephrase", saplingController.Rephrase);

// 2. AI detection
router.post("/aidetect", saplingController.AiDetect);

// 3. feature sentimentt
router.post("/tone", saplingController.Tone);

// Export router
module.exports = router;
