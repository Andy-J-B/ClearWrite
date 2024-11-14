const {
  CorrectGrammar,
  Readability,
  Summarize,
} = require("../controller/textGearsController");

const httpMocks = require("node-mocks-http");

describe("CorrectGrammar", () => {
  test("Test grammatical checking and suggestions", () => {
    const request = httpMocks.createRequest({
      method: "GET",
      url: "/some/url",
    });

    const response = httpMocks.createResponse();

    sendSomeStuff(request, response, (err) => {
      expect(err).toBeFalsy();
    });

    const { property } = JSON.parse(response._getData());

    expect(property).toBe("someValue");
  });
});
