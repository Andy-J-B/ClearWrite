/*
 *** AIDetect.test.js
 ***
 *** Description : Integration test for the AI detection feature of the API
 ***
 */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./server/.env" });
}

const supertest = require("supertest");
const app = require("../../../app"); // Your Express app

describe("POST request to /aidetect", () => {
  test("Simple request", async () => {
    const text =
      "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.";
    const response = await supertest(app)
      .post("/aidetect") // POST request to /api/submit
      .send({ text }) // Send the request body as JSON
      .set("Content-Type", "application/json"); // Set the headers

    // Assertions
    expect(response.body).toEqual({
      overallScore: 0.9840300298077785,
      sentenceScores: [
        {
          score: 0.21343320587607306,
          sentence:
            "Writing well is a skill that opens doors to countless opportunities.",
        },
        {
          score: 9.419816038302997e-10,
          sentence:
            "Grammar is important because it makes the sentences clarity and better for readings.",
        },
        {
          score: 0.43752189183034196,
          sentence:
            "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
        },
        {
          score: 0.3412947188620773,
          sentence:
            "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
        },
      ],
    }); // Assert the response body
  });
});

afterAll(() => {
  // Close any database connections, mock servers, etc.
  // Example for stopping an Express app server if needed:
  if (app.server) {
    app.server.close();
  }
});
