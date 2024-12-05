/*
 *** readablitiy.test.js
 ***
 *** Description : Integration test for the readability feature of the API
 ***
 */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./server/.env" });
}

const supertest = require("supertest");
const app = require("../../../app"); // Your Express app

describe("POST request to /readability", () => {
  test("Simple request", async () => {
    const text =
      "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.";
    const response = await supertest(app)
      .post("/readability") // POST request to /api/submit
      .send({ text }) // Send the request body as JSON
      .set("Content-Type", "application/json"); // Set the headers

    // Assertions
    expect(response.body).toEqual({
      originalText:
        "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
      fleschKincaid: {
        readingEase: 51.7,
        grade: "10th to 12th grade",
        interpretation: "Fairly difficult to read",
      },
      emotion: {
        positive: 0.5,
        negative: 0.5,
      },
      counters: {
        length: 402,
        clearLength: 339,
        words: 65,
        sentences: 4,
      },
      all: {
        fleschKincaid: {
          readingEase: 51.7,
          grade: "10th to 12th grade",
          interpretation: "Fairly difficult to read",
        },
        gunningFog: 12.7,
        colemanLiau: 12,
        SMOG: 12,
        vocabularySize: {
          active: null,
          passive: null,
        },
        emotion: {
          positive: 0.5,
          negative: 0.5,
        },
        counters: {
          length: 402,
          clearLength: 339,
          words: 65,
          sentences: 4,
        },
      },
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
