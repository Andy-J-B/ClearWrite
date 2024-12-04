/*
 *** saplingController.js
 ***
 *** Description : Controller for handling API requests for 3 features:
 ***               1. Rephrasing text to improve clarity and formality
 ***               2. Detecting AI-generated text
 ***               3. Analyzing the tone of the text
 */

// Import necessary modules
const axios = require("axios");         
const { response } = require("express");

// 1. Rephrasing
const Rephrase = async (req, res) => {
  // Get text to rephraser
  const text = req.body.text;

  // If there is no text 
  if (!text) {                     
    return res.status(400).send("Invalid text.");
  }
  // Get apiKey from dotenv file
  const apiKey = process.env.Sapling_API_KEY;

  // Seperate sentences
  // From https://stackoverflow.com/questions/11761563/javascript-regexp-for-splitting-text-into-sentences-and-keeping-the-delimiter
  const seperated = text.match(/[^\.!\?]+[\.!\?]+/g);
  
  try {                      
    let resultingData = [];

    // If the text length is greater than 0, process each sentence
    if (text.length > 0) {
      for (var i = 0; i < seperated.length; i++) {
        let textToEvaluate = seperated[i].trim();

        // Send request to sapling API
        const response = await axios.post(
          "https://api.sapling.ai/api/v1/rephrase",
          {
            key: `${apiKey}`,
            text: `${textToEvaluate}`,
            mapping: "informal_to_formal",
          }
        );

        // Push the rephrased text to the resultingData
        resultingData.push({
          originalText: text,
          rephrasing: response?.data?.results,
        });
      }
    } else {
      // If there are no input text, push just the original text
      resultingData.push({
        originalText: text,
        rephrasing: [],
      });
    }

    res.json({ rephrase: resultingData });
  } catch (error) {
    // If there is an error

    res.status(400).send(`Error: ${error}`);
  }
};

// 2. AI detection
const AiDetect = async (req, res) => {

  //   Get text to AI detector
  const text = req.body.text;

  // If there is no text
  if (!text) {
    return res.status(400).send("Invalid text.");
  }
  // Get apiKey from dotenv file
  const apiKey = process.env.Sapling_API_KEY;

  try {

    // Send request to sapling API for AI detection
    const response = await axios.post(
      "https://api.sapling.ai/api/v1/aidetect",
      {
        key: `${apiKey}`,
        text: `${text}`,
        sent_scores: true, // Enable sentence-level scoring
        score_string: false, // Disable token heatmap
        version: "20240606", // Default version
      }
    );
    const { status, data } = response;

    // Send the response
    res.json({
      overallScore: data.score,
      sentenceScores: data.sentence_scores,
    });
  } 
  catch (error) {

    // If there is an error
    res.status(400).send(`Error: ${error}`);

  }
};


// 3. Tone analysis
const Tone = async (req, res) => {

  // Get text to analyze
  const text = req.body.text;

  // If there is no text
  if (!text) {
    return res.status(400).send("Invalid text.");
  }

  // Get apiKey from dotenv file
  const apiKey = process.env.Sapling_API_KEY;

  try {
    // Send request to sapling API for tone analysis
    const response = await axios.post(
      "https://api.sapling.ai/api/v1/sentiment",
      {
        key: `${apiKey}`,
        text: `${text}`,
      }
    );
    
    // Get the response data
    const { status, data } = response;

    // Send the response
    res.json({
      sentences: data.sents,
      overallSentiment: data.overall,
      detailedResults: data.results,
    });
  } catch (error) {
    // If there is an error
    res.status(400).send(`Error: ${error}`);
  }
};

// Export the functions
module.exports = {
  Rephrase,
  AiDetect,
  Tone,
};
