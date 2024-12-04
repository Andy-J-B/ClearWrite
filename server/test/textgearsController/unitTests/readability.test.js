const { Readability } = require("../../../controller/textGearsController");

const httpMocks = require("node-mocks-http");
jest.mock("axios");
const axios = require("axios");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./server/.env" });
}

describe("Readability", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test readability checking and evaluate score", async () => {
    // Mock the API response for axios.get
    const mockApiResponse = {
      status: true, // false in case of checking error
      data: {
        response: {
          stats: {
            fleschKincaid: {
              // Flesch–Kincaid index (https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests)
              readingEase: 53.4, // Index value
              grade: "10th to 12th grade", // Flesch–Kincaid grade
              interpretation: "Fairly difficult to read", // index value interpretation
            },
            gunningFog: 12.2, // https://en.wikipedia.org/wiki/Gunning_fog_index
            colemanLiau: 12, // https://en.wikipedia.org/wiki/Coleman–Liau_index
            SMOG: 12, // https://en.wikipedia.org/wiki/SMOG
            vocabularySize: {
              active: null, // How many words author uses every day
              passive: null, // How many words author knows
            },
            emotion: {
              // text emotion classifier
              positive: 0.79,
              negative: 0.21,
            },
            counters: {
              length: 1128,
              clearLength: 936,
              words: 187,
              sentences: 10,
            },
          },
        },
      },
    };

    axios.get.mockResolvedValue(mockApiResponse);

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/readability",
      body: {
        text: "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.",
      },
    });

    const response = httpMocks.createResponse();

    await Readability(request, response);

    const data = response._getJSONData();
    // console.log(data);

    expect(data).toEqual({
      originalText:
        "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.",
      fleschKincaid: {
        readingEase: 53.4, // Index value
        grade: "10th to 12th grade", // Flesch–Kincaid grade
        interpretation: "Fairly difficult to read", // index value interpretation
      },
      emotion: {
        positive: 0.79,
        negative: 0.21,
      },
      counters: {
        length: 1128,
        clearLength: 936,
        words: 187,
        sentences: 10,
      },
      all: {
        fleschKincaid: {
          // Flesch–Kincaid index (https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests)
          readingEase: 53.4, // Index value
          grade: "10th to 12th grade", // Flesch–Kincaid grade
          interpretation: "Fairly difficult to read", // index value interpretation
        },
        gunningFog: 12.2, // https://en.wikipedia.org/wiki/Gunning_fog_index
        colemanLiau: 12, // https://en.wikipedia.org/wiki/Coleman–Liau_index
        SMOG: 12, // https://en.wikipedia.org/wiki/SMOG
        vocabularySize: {
          active: null, // How many words author uses every day
          passive: null, // How many words author knows
        },
        emotion: {
          // text emotion classifier
          positive: 0.79,
          negative: 0.21,
        },
        counters: {
          length: 1128,
          clearLength: 936,
          words: 187,
          sentences: 10,
        },
      },
    });
  });
});

describe("TextGears Error 600 Readabiity", () => {
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

    await Readability(request, response);

    expect(response.statusCode).toBe(600); // Custom status code for invalid API key
    expect(response._getJSONData()).toEqual({ error: "API key is missing" });
    process.env.TextGears_API_KEY = originalApiKey;
  });
});

describe("TextGears Error 601 Readability", () => {
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
      await Readability(request, response);
    } catch (error) {
      expect(response.statusCode).toBe(601); // Custom status code for invalid API key
      expect(response._getJSONData()).toEqual({ error: "Text is required" });
    }
  });
});

describe("TextGears Error 501 Readability", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Internal server error Readability", async () => {
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
      await Readability(request, response);
    } catch (error) {
      expect(response.statusCode).toBe(501); // Custom status code for invalid API key
      expect(response._getJSONData()).toEqual({
        error: "Internal Server Error",
      });
    }
  });
});

describe("TextGears Too little words", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test when there are too little words to evaluate Readability", async () => {
    // Mock the API response for axios.get
    const mockApiResponse = {
      status: true, // false in case of checking error
      response: {
        stats: {
          fleschKincaid: {
            // Flesch–Kincaid index (https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests)
            readingEase: 36.6, // Index value
            grade: "College", // Flesch–Kincaid grade
            interpretation: "Difficult to read", // Index value interpretation
          },
          gunningFog: 0.4, // https://en.wikipedia.org/wiki/Gunning_fog_index
          colemanLiau: 12, // https://en.wikipedia.org/wiki/Coleman–Liau_index
          SMOG: 3.3, // https://en.wikipedia.org/wiki/SMOG
          vocabularySize: {
            active: null, // How many words author uses every day
            passive: null, // How many words author knows
          },
          emotion: {
            // Text emotion classifier
            positive: 0.5,
            negative: 0.5,
          },
          counters: {
            length: 5,
            clearLength: 5,
            words: 1,
            sentences: 1,
          },
        },
      },
    };

    axios.get.mockResolvedValue(mockApiResponse);

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/readability",
      body: {
        text: "Hello",
      },
    });

    const response = httpMocks.createResponse();

    await Readability(request, response);
    expect(response._getJSONData()).toEqual({
      error: "Essay is too short to evaluate",
    });
  });
});
