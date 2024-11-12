// Import necessary modules
const express = require("express");
const router = express.Router();
const hooke = require("hookejs");

// Load environmental variables
require("dotenv").config();

// Check plagarism
router.post("/hookejs", async (req, res) => {
  // Get text to evaluate
  const text = req.body.text;

  // Replace all spaces with a +
  //   const addTexts = text.replace(/ /g, "+");

  // Test with default text
  const addTexts = `Sherlock Holmes (/'ʃɜ:rlɒk 'hoʊmz/ or /-'hoʊlmz/) is a fictional private detective created by British author Sir Arthur Conan Doyle. Referring to himself as a "consulting detective" in the stories, Holmes is known for his proficiency with observation, deduction, forensic science, and logical reasoning that borders on the fantastic, which he employs when investigating cases for a wide variety of clients, including Scotland Yard.`;

  // Request and wait for API response
  result = await hooke.match({ text: addTexts });

  try {
    res.json({
      originalText: text,
      corrections: result,
    });
  } catch (error) {
    // If there is an error
    res.status(500).send(`Error: ${error}`);
  }
});

module.exports = router;
