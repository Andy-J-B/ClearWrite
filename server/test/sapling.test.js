const request = require("supertest");

const express = require("express");

const saplingRouter = require("../routers/sapling"); // Adjust path if needed

const app = express();

app.use(express.json());

app.use("/", saplingRouter);

require("dotenv").config({ path: "./server/.env" });

//this was for mocking API

// Mock axios to simulate API responses

//jest.mock("axios");

//const axios = require("axios");

describe("Sapling API Tests", () => {
  const apiKey = process.env.Sapling_API_KEY;

  if (!apiKey) {
    //Ensure the API key is loaded from env

    throw new Error(
      "Sapling_API_KEY is missing. Set it in your environment variables."
    );
  }

  // Testing the Resphrase feature

  describe("POST /rephrase", () => {
    it("should return rephrased text (real API)", async () => {
      const response = await request(app).post("/rephrase").send({
        text: "This is an example sentence.",
      });

      expect(response.status).toBe(200);

      expect(response.body.rephrasing).toBeDefined();

      expect(response.body.rephrasing.results.length).toBeGreaterThan(0);
    });

    it("should return 500 if text is missing", async () => {
      const response = await request(app).post("/rephrase").send({});

      expect(response.status).toBe(500);

      expect(response.body.error).toContain("Input text is required");
    });
  });

  // Test for /aidetect endpoint

  describe("POST /aidetect", () => {
    it("should return AI detection results (Actual API)", async () => {
      const response = await request(app).post("/aidetect").send({
        text: "This sentence might be AI-generated.",
      });

      expect(response.status).toBe(200);

      expect(response.body.overallScore).toBeDefined();

      expect(response.body.sentenceScores.length).toBeGreaterThan(0);
    });

    it("should return 500 if text is missing", async () => {
      const response = await request(app).post("/aidetect").send({});

      expect(response.status).toBe(400);

      expect(response.body.error).toContain("Input text is required");
    });
  });

  // Test for /tone endpoint

  describe("POST /sentiment", () => {
    it("should return sentiment analysis results (real API)", async () => {
      const response = await request(app).post("/sentiment").send({
        text: "I am extremely happy with this progress!",
      });

      expect(response.status).toBe(200);

      expect(response.body.sentences).toBeDefined();

      expect(response.body.overallSentiment).toBeDefined();

      expect(response.body.sentences.length).toBeGreaterThan(0);
    });

    it("should return 400 if text is missing", async () => {
      const response = await request(app).post("/sentiment").send({});

      expect(response.status).toBe(400);

      expect(response.body.error).toContain("Input text is required");
    });
  });
});
