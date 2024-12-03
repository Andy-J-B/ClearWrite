require("dotenv").config({ path: "./server/.env" });

const supertest = require("supertest");
const app = require("../../../app"); // Your Express app

describe("POST request to /tone", () => {
  test("Simple request", async () => {
    const text =
      "Writing well is a skill that opens doors to countless opportunities. Grammar is important because it makes the sentences clarity and better for readings. It's always a joy to help others improve their writing and see them gain confidence in their communication skills! As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.";
    const response = await supertest(app)
      .post("/tone") // POST request to /api/submit
      .send({ text }) // Send the request body as JSON
      .set("Content-Type", "application/json"); // Set the headers

    // Assertions
    expect(response.body).toEqual({
      sentences: [
        "Writing well is a skill that opens doors to countless opportunities.",
        "Grammar is important because it makes the sentences clarity and better for readings.",
        "It's always a joy to help others improve their writing and see them gain confidence in their communication skills!",
        "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
      ],
      overallSentiment: [[1, "POSITIVE"]],
      detailedResults: [
        [[0.984330375213176, "POSITIVE"]],
        [
          [0.9972165948129259, "POSITIVE"],
          [0.001203823136165738, "NEUTRAL"],
        ],
        [[0.9829248506575823, "POSITIVE"]],
        [[0.9685407653450966, "POSITIVE"]],
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
