// Import express; axios
const express = require("express");
const axios = require("axios");

// Initiate express
const app = express();
app.use(express.json());

// Load environmental variables
require("dotenv").config();

app.post("/correctGrammar", async (req, res) => {
  // Get text to grammar check
  const text = req.body.text;

  // Replace all spaces with a +
  const addTexts = text.replace(/ /g, "+");

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;
  const url = `https://api.textgears.com/grammar?text=${addTexts}&language=en-GB&whitelist=&dictionary_id=&ai=1&key=${apiKey}`;
  // const url = `https://api.textgears.com/grammar?key=${apiKey}&text=${addTexts}&language=en-GB`;

  try {
    // Codes from lines 24-42 is from
    // "https://gist.github.com/krishheii/415ccdf6ab9a6bb29d60bdcdbdb5e98c"

    const data = await axios.get(url);
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

// Start port
const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
