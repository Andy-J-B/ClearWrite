require("dotenv").config({ path: "./server/.env" });

const supertest = require("supertest");
const app = require("../../../app"); // Your Express app

describe("POST request to /correctGrammar", () => {
  test("Simple request", async () => {
    const text =
      "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.";

    const response = await supertest(app)
      .post("/correctGrammar") // POST request to /api/submit
      .send({ text }) // Send the request body as JSON
      .set("Content-Type", "application/json"); // Set the headers

    // Assertions
    expect(response.body).toEqual({
      grammar: [
        {
          originalText:
            "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
          corrections: [
            {
              error: {
                en: "Possible spelling mistake",
              },
              suggestions: [
                "emphasising",
                "reemphasising",
                "emphasis",
                "emphasise",
                "emphasis's",
                "emphasised",
              ],
            },
          ],
          all: [
            {
              id: expect.any(String),
              offset: 83,
              length: 11,
              description: {
                en: "Possible spelling mistake",
              },
              bad: "emphasizing",
              better: [
                "emphasising",
                "reemphasising",
                "emphasis",
                "emphasise",
                "emphasis's",
                "emphasised",
              ],
              type: "spelling",
            },
          ],
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
