const { Summarize } = require("../../../controller/textGearsController");

const httpMocks = require("node-mocks-http");
jest.mock("axios");
const axios = require("axios");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./server/.env" });
}

describe("Summarize", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test summarizing the essay", async () => {
    const mockApiResponse = {
      status: true, // false in case of checking error
      data: {
        response: {
          keywords: [
            "text",
            "readability",
            "english",
            "printing",
            "fewer",
            "words",
            "terms",
            "higher",
            "features",
            "indexes",
          ],
          highlight: [
            // Most important paragraph, starting with main sentence
            "The two main factors of readability are the printing and linguistic features of the text.",
            "In other words, pages containing simple and clear text get higher positions in the search results.",
          ],
          summary: [
            // Text summary sentences
            "The two main factors of readability are the printing and linguistic features of the text.",
            "The Flesch Kinkaid Score is the most popular way to measure the readability of English text.",
            "It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities.",
          ],
        },
      },
    };

    axios.get.mockResolvedValue(mockApiResponse);

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/summarize",
      body: {
        text: "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.",
      },
    });

    const response = httpMocks.createResponse();

    await Summarize(request, response);

    const data = response._getJSONData();

    // console.log(data);

    expect(data).toEqual({
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
          "terms",
          "higher",
          "features",
          "indexes",
        ],
        highlight: [
          // Most important paragraph, starting with main sentence
          "The two main factors of readability are the printing and linguistic features of the text.",
          "In other words, pages containing simple and clear text get higher positions in the search results.",
        ],
        summary: [
          // Text summary sentences
          "The two main factors of readability are the printing and linguistic features of the text.",
          "The Flesch Kinkaid Score is the most popular way to measure the readability of English text.",
          "It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities.",
        ],
      },
    });
  });
});

describe("TextGears Error 600 Summarize", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Error with absent required parameter : Api key.", async () => {
    const originalApiKey = process.env.TextGears_API_KEY;
    delete process.env.TextGears_API_KEY;

    axios.post.mockRejectedValue({
      response: { status: 600, data: "API key is missing" },
    });

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/summarize",
      body: { text: "I is an engeneer." },
    });

    const response = httpMocks.createResponse();

    await Summarize(request, response);

    expect(response.statusCode).toBe(600); // Custom status code for invalid API key
    expect(response._getJSONData()).toEqual({ error: "API key is missing" });
    process.env.TextGears_API_KEY = originalApiKey;
  });
});

describe("TextGears Error 600 Summarize", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Error with absent required parameter : Api key.", async () => {
    const originalApiKey = process.env.TextGears_API_KEY;
    delete process.env.TextGears_API_KEY;

    axios.post.mockRejectedValue({
      response: { status: 600, data: "API key is missing" },
    });

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/summarize",
      body: { text: "I is an engeneer." },
    });

    const response = httpMocks.createResponse();

    await Summarize(request, response);

    expect(response.statusCode).toBe(600); // Custom status code for invalid API key
    expect(response._getJSONData()).toEqual({ error: "API key is missing" });
    process.env.TextGears_API_KEY = originalApiKey;
  });
});

describe("TextGears Error 601 Summarize", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Error with absent required parameter : Text.", async () => {
    axios.post.mockRejectedValue({
      response: { status: 601, data: "Text is required" },
    });

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/summarize",
    });

    const response = httpMocks.createResponse();

    try {
      await Summarize(request, response);
    } catch (error) {
      expect(response.statusCode).toBe(601); // Custom status code for invalid API key
      expect(response._getJSONData()).toEqual({ error: "Text is required" });
    }
  });
});

describe("TextGears Error 501 Summarize", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Internal server error Summarize", async () => {
    axios.get.mockRejectedValueOnce(new Error("Internal server error"));

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/readability",
      body: {
        text: "Hello. As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication",
      },
    });

    const response = httpMocks.createResponse();

    try {
      await Summarize(request, response);
    } catch (error) {
      expect(response.statusCode).toBe(501); // Custom status code for invalid API key
      expect(response._getJSONData()).toEqual({
        error: "Internal Server Error",
      });
    }
  });
});

describe("TextGears Error 701 Summarize", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test summarizing the essay", async () => {
    const mockApiResponse = {
      status: true, // false in case of checking error
      response: {
        keywords: ["hello"],
        highlight: [
          // Most important paragraph, starting with main sentence
        ],
        summary: [
          // Text summary sentences
          "Hello.",
        ],
      },
    };

    axios.get.mockResolvedValue(mockApiResponse);

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/summarize",
      body: {
        text: "Hello.",
      },
    });

    const response = httpMocks.createResponse();

    await Summarize(request, response);

    const data = response._getJSONData();

    // console.log(data);

    expect(data).toEqual({
      error: "Essay too short to evaluate",
    });
  });
});
