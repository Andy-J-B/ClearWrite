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

// Load environmental variables
require("dotenv").config();

// Rephrasing
router.post("/rephrase", async (req, res) => {
  // Get text to grammar check
  const text = req.body.text;

  // Get apiKey from dotenv file
  const apiKey = process.env.Sapling_API_KEY;

  try {
    if (text.length > 0) {
      //   const response = await axios.post(
      //     "https://api.sapling.ai/api/v1/paraphrase",
      //     {
      //       key: `${apiKey}`,
      //       text,
      //     }
      //   );
      const { status, data } = response;
      console.log({ status });
      console.log(JSON.stringify(data, null, 4));
      res.json({ originalText: text, rephrasing: data, all: response });
    } else {
      // If there are no grammatical errors
      res.json({
        originalText: text,
        rephrasing: [],
      });
    }
  } catch (error) {
    // If there is an error

    res.status(500).send(`Error: ${error}`);
  }
});


// 2. AI detection
router.post("/aidetect", async (req, res) => {
  const { text } = req.body;

  try {
    
    const response = await axios.post("https://api.sapling.ai/api/v1/aidetect", {
      key: `${apiKey}`,
      text,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 3. feature tone detection
router.post("/tone", async (req, res) => {
  const { text } = req.body;

  try {
    
    const response = await axios.post("https://api.sapling.ai/api/v1/tone", {
      key: `${apiKey}`,
      text,
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Export router
module.exports = router;
