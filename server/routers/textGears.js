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

// Load environmental variables
require("dotenv").config();

// Correct Grammatical issues
router.post("/correctGrammar", async (req, res) => {
  // Get text to grammar check
  const text = req.body.text;

  // Replace all spaces with a +
  const addTexts = text.replace(/ /g, "+");

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;

  // Server request url
  const url = `https://api.textgears.com/grammar?text=${addTexts}&language=en-GB&whitelist=&dictionary_id=&ai=1&key=${apiKey}`;

  try {
    // Codes from lines 24-42 is from
    // "https://gist.github.com/krishheii/415ccdf6ab9a6bb29d60bdcdbdb5e98c"

    // Should not test too many times due to api usage limit
    // Uncomment only for testing and production
    // const data = await axios.get(url);

    // Extract errors
    const errors = data?.data?.response?.errors;

    if (errors.length > 0) {
      // If there are grammatical errors
      res.json({
        originalText: text,
        corrections: errors.map((error) => ({
          error: error.description,
          suggestions: error.better,
        })),
        all: errors,
      });
    } else {
      // If there are no grammatical errors
      res.json({
        originalText: text,
        corrections: [],
      });
    }
  } catch (error) {
    // If there is an error
    res.status(500).send(`Error: ${error}`);
  }
});

// Readability grading
router.post("/readability", async (req, res) => {
  // Get text to check readability
  const text = req.body.text;

  // Replace all spaces with a +
  const addTexts = text.replace(/ /g, "+");

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;

  // Server request url
  const url = `https://api.textgears.com/readbility?key=${apiKey}&text=${addTexts}`;

  try {
    // Should not test too many times due to api usage limit
    // Uncomment only for testing and production
    // const data = await axios.get(url);

    // Extract statistics
    const statistics = data?.data?.response?.stats;
    if (statistics?.counters?.words > 30) {
      // If there are enough words
      res.json({
        originalText: text,
        fleschKincaid: statistics?.fleschKincaid,
        emotion: statistics?.emotion,
        counters: statistics?.counters,
        all: statistics,
      });
    } else {
      // If there are too little words
      res.json({ error: "Essay is too short to evaluate." });
    }
  } catch (error) {
    // Catch errors
    res.status(500).send(`Error: ${error}`);
  }
});

// Summarizer
router.post("/summarize", async (req, res) => {
  // Get text to check readability
  const text = req.body.text;

  // Replace all spaces with a +
  const addTexts = text.replace(/ /g, "+");

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;

  // Server request url
  const url = `https://api.textgears.com/summarize?key=${apiKey}&language=en-GB&text=${addTexts}`;

  try {
    // Should not test too many times due to api usage limit
    // Uncomment only for testing and production
    // const data = await axios.get(url);

    // Extract summaries
    const summaries = data?.data?.response;

    if (summaries?.keywords.length > 0) {
      // If there are enough sentences
      res.json({
        originalText: text,
        corrections: summaries?.summary,
        all: summaries,
      });
    } else if (text.length == 0) {
      // If there are no words at all
      res.json({ error: "No words present to evaluate." });
    } else {
      // If the essay is too short
      res.json({ error: "Essay is too short to evaluate." });
    }
  } catch (error) {
    // Catch error
    res.status(500).send(`Error: ${error}`);
  }
});

// Export router
module.exports = router;