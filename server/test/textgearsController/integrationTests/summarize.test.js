/*
 *** summmarize.test.js
 ***
 *** Description : Integration test for the summarize feature of the API
 ***
 */

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./server/.env" });
}

const supertest = require("supertest");
const app = require("../../../app"); // Your Express app

describe("POST request to /summarize", () => {
  test("Simple request", async () => {
    const text =
      "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.";
    const response = await supertest(app)
      .post("/summarize") // POST request to /api/submit
      .send({ text }) // Send the request body as JSON
      .set("Content-Type", "application/json"); // Set the headers

    // Assertions
    expect(response.body).toEqual({
      originalText:
        "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.",
      summaries: [
        // Text summary sentences
        "The two main factors of readability are the printing and linguistic features of the text.",
        "The Flesch Kinkaid Score is the most popular way to measure the readability of English text.",
        "It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities.",
      ],
      all: {
        keywords: [
          "text",
          "readability",
          "english",
          "printing",
          "fewer",
          "words",
          "features",
          "higher",
          "terms",
          "indexes",
        ],
        highlight: [
          // Most important paragraph, starting with main sentence
          "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity.",
          "The two main factors of readability are the printing and linguistic features of the text.",
        ],
        summary: [
          // Text summary sentences
          "The two main factors of readability are the printing and linguistic features of the text.",
          "The Flesch Kinkaid Score is the most popular way to measure the readability of English text.",
          "It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities.",
        ],
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
