const axios = require("axios");

// Correct Grammatical issues
const CorrectGrammar = async (req, res) => {
  // Get text to grammar check
  const text = req.body.text;

  if (!text) {
    return res.status(601).json({ error: "Text is required" });
  }

  // Seperate sentences
  // From https://stackoverflow.com/questions/11761563/javascript-regexp-for-splitting-text-into-sentences-and-keeping-the-delimiter

  var seperated = text.match(/[^\.!\?]+[\.!\?]+/g);

  if (seperated == null || seperated == undefined) {
    seperated = [text];
  } else if (
    text.slice(-1) !== "." &&
    text.slice(-1) !== "!" &&
    text.slice(-1) !== "?"
  ) {
    // Add the last part without punctuation
    const lastSentence = text.match(/[^\.!\?]+$/g);
    if (lastSentence) {
      seperated.push(lastSentence[0].trim());
    }
  }

  seperatedAddedTexts = [];

  for (var i = 0; i < seperated.length; i++) {
    // Replace all spaces with a +
    const addTexts = seperated[i].trim().replace(/ /g, "+");
    seperatedAddedTexts.push(addTexts);
  }

  // Insert each into a list

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;

  if (!apiKey) {
    return res.status(600).json({ error: "API key is missing" });
  }

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
      const response = await axios.get(urls[i]);

      // Extract errors

      //
      const { status, data } = response;

      const errors = data?.response?.errors;

      if (errors.length > 0) {
        // If there are grammatical errors
        resultingData.push({
          originalText: seperated[i],
          corrections: errors.map((error) => ({
            error: error.description,
            suggestions: error.better,
          })),
          all: errors,
        });
        //
      } else {
        // If there are no grammatical errors
        resultingData.push({
          originalText: seperated[i],
          corrections: [],
        });
        //
      }
    }

    res.json({ grammar: resultingData });
  } catch (error) {
    // If there is an error
    res.status(501).send(`Error: ${error}`);
  }
};

// Readability grading
const Readability = async (req, res) => {
  // Get text to check readability
  const text = req.body.text;

  if (!text) {
    return res.status(601).json({ error: "Text is required" });
  }

  // Replace all spaces with a +
  const addTexts = text.replace(/ /g, "+");

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;

  if (!apiKey) {
    return res.status(600).json({ error: "API key is missing" });
  }

  // Server request url
  const url = `https://api.textgears.com/readability?key=${apiKey}&text=${addTexts}`;

  try {
    // Should not test too many times due to api usage limit
    // Uncomment only for testing and production
    //
    const response = await axios.get(url);

    // Extract errors

    //
    const { status, data } = response;

    const statistics = data?.response?.stats;

    // Extract statistics

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
      res.json({ error: "Essay is too short to evaluate" });
    }
  } catch (error) {
    // If there is an error

    res.status(501).send(`Error: ${error}`);
  }
};

// Summarizer
const Summarize = async (req, res) => {
  // Get text to check readability
  const text = req.body.text;

  if (!text) {
    return res.status(601).json({ error: "Text is required" });
  }

  // Replace all spaces with a +
  const addTexts = text.replace(/ /g, "+");

  // Get apiKey from dotenv file
  const apiKey = process.env.TextGears_API_KEY;

  if (!apiKey) {
    return res.status(600).json({ error: "API key is missing" });
  }

  // Server request url
  const url = `https://api.textgears.com/summarize?key=${apiKey}&language=en-GB&text=${addTexts}`;

  try {
    // Should not test too many times due to api usage limit
    // Uncomment only for testing and production
    const response = await axios.get(url);

    // Extract errors

    //
    const { status, data } = response;

    const summaries = data?.response;

    // Extract summaries

    if (summaries?.summary.length > 2) {
      // If there are enough sentences
      res.json({
        originalText: text,
        summaries: summaries?.summary,
        all: summaries,
      });
    } else {
      // If the essay is too short
      res.json({
        error: "Essay too short to evaluate",
      });
    }
  } catch (error) {
    // If there is an error

    res.status(501).send(`Error: ${error}`);
  }
};

module.exports = {
  CorrectGrammar,
  Readability,
  Summarize,
};
