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
    // console.log(data);

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
        text: "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.",
      },
    });

    const response = httpMocks.createResponse();

    Readability(request, response);

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

describe("Summarize", () => {
  // Inspired from https://stackoverflow.com/questions/45210018/how-to-test-response-data-from-express-in-jest
  test("Test summarizing the essay", () => {
    const request = httpMocks.createRequest({
      method: "POST",
      url: "/summarize",
      body: {
        text: "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.",
      },
    });

    const response = httpMocks.createResponse();

    Readability(request, response);

    const data = response._getJSONData();

    expect(data).toEqual({
      originalText:
        "Readability (legibility) is a feature of the text that represents ease of its perception by the reader, as well as the evaluation of its simplicity. The two main factors of readability are the printing and linguistic features of the text.    The Flesch Kinkaid Score is the most popular way to measure the readability of English text. It works on the principle of “the fewer words in the text, and the fewer syllables in them, the easier it is to perceive” and is most often used for checking essays in schools and universities. The higher the index value on a 100-point scale, the better the readability of the text.    Smart human-trained search algorithms evaluate all site content for completeness of topic disclosure, and in a form that is understandable to the reader. For this purpose, readability indexes are used. In other words, pages containing simple and clear text get higher positions in the search results. Improving the text in terms of its printing and linguistic qualities will increase the user's viewing time. It turns out that the readability significantly affects the ranking of sites in the search engine.",
      summary: [
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
