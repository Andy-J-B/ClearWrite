/*
 *** textGears.js
 ***
 *** Description : API used for 3 features :
 ***               Correcting grammatical mistakes and making suggested changes
 ***               Evaluate the readability of the text
 ***               Summarize the essay by looking for key points
 */

// Import necessary modules

const express = require("express");
const router = express.Router();
const axios = require("axios");

const saplingController = require("../controller/saplingController");

// Load environmental variables
require("dotenv").config();

if (process.env.NODE_ENV === "test") {
  jest.mock("axios");
}

// Rephrasing
router.post("/rephrase", saplingController.Rephrase);

// 2. AI detection
router.post("/aidetect", saplingController.AiDetect);

// 3. feature sentimentt
router.post("/tone", saplingController.Tone);

// Export router
module.exports = router;
