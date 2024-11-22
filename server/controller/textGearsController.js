const axios = require("axios");

// Correct Grammatical issues
const CorrectGrammar = async (req, res) => {
  // Get text to grammar check
  const text = req.body.text;

  // Seperate sentences
  // From https://stackoverflow.com/questions/11761563/javascript-regexp-for-splitting-text-into-sentences-and-keeping-the-delimiter
  const seperated = text.match(/[^\.!\?]+[\.!\?]+/g);

  seperatedAddedTexts = [];

  for (var i = 0; i < seperated.length; i++) {
    // Replace all spaces with a +
    const addTexts = seperated[i].trim().replace(/ /g, "+");
    seperatedAddedTexts.push(addTexts);
  }

  // Insert each into a list

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;

  // urls list
  var urls = [];

  for (var i = 0; i < seperatedAddedTexts.length; i++) {
    // Server request url
    const url = `https://api.textgears.com/grammar?text=${seperatedAddedTexts[i]}&language=en-GB&whitelist=&dictionary_id=&ai=1&key=${apiKey}`;
    urls.push(url);
  }

  try {
    let resultingData = [];
    // Codes from lines 24-42 is from
    // "https://gist.github.com/krishheii/415ccdf6ab9a6bb29d60bdcdbdb5e98c"

    for (var i = 0; i < urls.length; i++) {
      // Should not test too many times due to api usage limit
      // Uncomment only for testing and production
      const data = await axios.get(urls[i]);

      // Extract errors
      const errors = data?.data?.response?.errors;

      if (errors.length > 0) {
        // If there are grammatical errors
        errors.push({
          originalText: seperated[i],
          corrections: errors.map((error) => ({
            error: error.description,
            suggestions: error.better,
          })),
          all: errors,
        });
        console.log(errors);
      } else {
        // If there are no grammatical errors
        errors.push({
          originalText: seperated[i],
          corrections: [],
        });
        console.log(errors);
      }
    }

    res.json({ grammar: resultingData });
  } catch (error) {
    // If there is an error
    res.status(500).send(`Error: ${error}`);
  }
};

// Readability grading
const Readability = async (req, res) => {
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
    const data = await axios.get(url);

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
};

// Summarizer
const Summarize = async (req, res) => {
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
    const data = await axios.get(url);

    // Extract summaries
    const summaries = data?.data?.response;

    if (summaries?.keywords.length > 0) {
      // If there are enough sentences
      res.json({
        originalText: text,
        summaries: summaries?.summary,
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
};

module.exports = {
  CorrectGrammar,
  Readability,
  Summarize,
};
