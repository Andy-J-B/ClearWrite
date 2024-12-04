const { CorrectGrammar } = require("../../../controller/textGearsController");

const httpMocks = require("node-mocks-http");
jest.mock("axios");
const axios = require("axios");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./server/.env" });
}

describe("CorrectGrammar", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test grammatical checking and suggestions", async () => {
    // Mock the API response for axios.get
    const mockApiResponse = {
      status: true, // false in case of checking error
      data: {
        response: {
          result: true,
          errors: [
            // array of errors info
            {
              id: "e233210963", // unique error id
              offset: 83, // error text offset
              length: 11,
              description: {
                // API error description & some useful info
                en: "Possible spelling mistake",
              },
              bad: "emphasizing", // error text
              better: [
                // array of suggestions
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
      },
    };

    axios.get.mockResolvedValue(mockApiResponse);

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/correctGrammar",
      body: {
        text: "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
      },
    });

    const response = httpMocks.createResponse();

    await CorrectGrammar(request, response);

    const data = response._getJSONData();

    expect(data).toEqual({
      grammar: [
        {
          originalText:
            "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication.",
          corrections: [
            {
              error: { en: "Possible spelling mistake" },
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
              id: "e233210963",
              offset: 83,
              length: 11,
              description: { en: "Possible spelling mistake" },
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
    });
  });
});

describe("CorrectGrammar Case where sentence is undefine/null", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test grammatical checking when sentence is undefined/null", async () => {
    // Mock the API response for axios.get
    const mockApiResponse = {
      status: true, // false in case of checking error
      data: {
        response: {
          result: true,
          errors: [
            // array of errors info
            {
              id: "e233210963", // unique error id
              offset: 83, // error text offset
              length: 11,
              description: {
                // API error description & some useful info
                en: "Possible spelling mistake",
              },
              bad: "emphasizing", // error text
              better: [
                // array of suggestions
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
      },
    };

    axios.get.mockResolvedValue(mockApiResponse);

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/correctGrammar",
      body: {
        text: "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication",
      },
    });

    const response = httpMocks.createResponse();

    await CorrectGrammar(request, response);

    const data = response._getJSONData();

    expect(data).toEqual({
      grammar: [
        {
          originalText:
            "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication",
          corrections: [
            {
              error: { en: "Possible spelling mistake" },
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
              id: "e233210963",
              offset: 83,
              length: 11,
              description: { en: "Possible spelling mistake" },
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
    });
  });
});

describe("CorrectGrammar Case where sentence has no period", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test grammatical checking when sentence has no period", async () => {
    // Mock the API response for axios.get
    const mockApiResponse1 = {
      status: true, // false in case of checking error
      data: {
        response: {
          result: true,
          errors: [],
        },
      },
    };

    const mockApiResponse2 = {
      status: true, // false in case of checking error
      data: {
        response: {
          result: true,
          errors: [
            // array of errors info
            {
              id: "e233210963", // unique error id
              offset: 83, // error text offset
              length: 11,
              description: {
                // API error description & some useful info
                en: "Possible spelling mistake",
              },
              bad: "emphasizing", // error text
              better: [
                // array of suggestions
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
      },
    };
    axios.get
      .mockResolvedValueOnce(mockApiResponse1)
      .mockResolvedValueOnce(mockApiResponse2);

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/correctGrammar",
      body: {
        text: "Hello. As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication",
      },
    });

    const response = httpMocks.createResponse();

    await CorrectGrammar(request, response);

    const data = response._getJSONData();

    expect(data).toEqual({
      grammar: [
        {
          originalText: "Hello.",
          corrections: [],
        },
        {
          originalText:
            "As a wise individual once said, 'Good writing is a mirror of a well-ordered mind,' emphasizing the importance of clear communication",
          corrections: [
            {
              error: { en: "Possible spelling mistake" },
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
              id: "e233210963",
              offset: 83,
              length: 11,
              description: { en: "Possible spelling mistake" },
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
    });
  });
});

describe("CorrectGrammar Case where sentence has no corrections", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test grammatical checking when sentence has no corrections", async () => {
    // Mock the API response for axios.get
    const mockApiResponse = {
      status: true, // false in case of checking error
      data: {
        response: {
          result: true,
          errors: [],
        },
      },
    };

    axios.get.mockResolvedValue(mockApiResponse);

    const request = httpMocks.createRequest({
      method: "POST",
      url: "/correctGrammar",
      body: {
        text: "Hello.",
      },
    });

    const response = httpMocks.createResponse();

    await CorrectGrammar(request, response);

    const data = response._getJSONData();

    expect(data).toEqual({
      grammar: [
        {
          originalText: "Hello.",
          corrections: [],
        },
      ],
    });
  });
});

describe("TextGears Error 600 Grammar", () => {
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

    await CorrectGrammar(request, response);

    expect(response.statusCode).toBe(600); // Custom status code for invalid API key
    expect(response._getJSONData()).toEqual({ error: "API key is missing" });
    process.env.TextGears_API_KEY = originalApiKey;
  });
});

describe("TextGears Error 601 CorrectGrammar", () => {
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
      await CorrectGrammar(request, response);
    } catch (error) {
      expect(response.statusCode).toBe(601); // Custom status code for invalid API key
      expect(response._getJSONData()).toEqual({ error: "Text is required" });
    }
  });
});

describe("TextGears Error 501 CorrectGrammar", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Internal server error CorrectGrammar", async () => {
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
      await CorrectGrammar(request, response);
    } catch (error) {
      expect(response.statusCode).toBe(501); // Custom status code for invalid API key
      expect(response._getJSONData()).toEqual({
        error: "Internal Server Error",
      });
    }
  });
});
