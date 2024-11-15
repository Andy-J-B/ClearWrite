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

// Import user-related controllers
const textGearsController = require("../controller/textGearsController");

// Load environmental variables
require("dotenv").config();


// Router for correcting grammar
router.post("/correctGrammar", textGearsController.CorrectGrammar);


// Router for checking readability
router.post("/readability", textGearsController.Readability);

// Router for summarizing essay
router.post("/summarize", textGearsController.Summarize);

// Export router
module.exports = router;
