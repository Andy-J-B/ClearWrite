// Import necessary modules
const express = require("express");
const router = express.Router();

// Load environmental variables
require("dotenv").config();

router.post("/correctGrammar", async (req, res) => {
  // Get text to grammar check
  const text = req.body.text;

  // Replace all spaces with a +
  const addTexts = text.replace(/ /g, "+");

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;
  const url = `https://api.textgears.com/grammar?text=${addTexts}&language=en-GB&whitelist=&dictionary_id=&ai=1&key=${apiKey}`;

  console.log(url);

  try {
    // Codes from lines 24-42 is from
    // "https://gist.github.com/krishheii/415ccdf6ab9a6bb29d60bdcdbdb5e98c"

    // Should not test too many times due to api usage limit
    // Uncomment only for testing and production
    // const data = await axios.get(url);
    const errors = data?.data?.response?.errors;
    if (errors.length > 0) {
      res.json({
        originalText: text,
        corrections: errors.map((error) => ({
          error: error.description,
          suggestions: error.better,
        })),
        all: errors,
      });
    } else {
      res.json({
        originalText: text,
        corrections: [],
      });
    }
  } catch (error) {
    res.status(500).send(`Error: ${error}`);
  }
});

module.exports = router;
