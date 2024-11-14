const {
  CorrectGrammar,
  Readability,
  Summarize,
} = require("../controller/textGearsController");

const httpMocks = require("node-mocks-http");

describe("CorrectGrammar", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test grammatical checking and suggestions", () => {
    const request = httpMocks.createRequest({
      method: "POST",
      url: "/correctGrammar",
      body: {
        text: "I is an engeneer.",
      },
    });

    const response = httpMocks.createResponse();

    CorrectGrammar(request, response);

    const data = response._getJSONData();

    expect(data).toEqual({
      originalText: "I is an engeneer.",
      corrections: [
        {
          error: {
            en: "Use a first-person plural verb.",
          },
          suggestions: ["am"],
        },
        {
          error: {
            en: "Possible spelling mistake",
          },
          suggestions: [
            "engineer",
            "engender",
            "engineers",
            "engine",
            "ingenue",
            "engineer's",
          ],
        },
      ],
      all: [
        {
          id: "e504761736",
          offset: 2,
          length: 2,
          description: {
            en: "Use a first-person plural verb.",
          },
          bad: "is",
          better: ["am"],
          type: "grammar",
        },
        {
          id: "e1147650887",
          offset: 8,
          length: 8,
          description: {
            en: "Possible spelling mistake",
          },
          bad: "engeneer",
          better: [
            "engineer",
            "engender",
            "engineers",
            "engine",
            "ingenue",
            "engineer's",
          ],
          type: "spelling",
        },
      ],
    });
  });
});

describe("Readability", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test readability checking and evaluate score", () => {
    const request = httpMocks.createRequest({
      method: "POST",
      url: "/readability",
      body: {
        text: "I is an engeneer.",
      },
    });

    const response = httpMocks.createResponse();

    Readability(request, response);

    const data = response._getJSONData();
  });
});

describe("Summarize", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test summarizing the essay", () => {
    const request = httpMocks.createRequest({
      method: "POST",
      url: "/summarize",
      body: {
        text: "I is an engeneer.",
      },
    });

    const response = httpMocks.createResponse();

    Readability(request, response);

    const data = response._getJSONData();
  });
});
