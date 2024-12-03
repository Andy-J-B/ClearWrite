const axios = require("axios");
jest.mock("axios");
const { Tone } = require("../../../controller/saplingController");

describe("Tone Function Unit Test", () => {
  it("should return sentiment analysis results", async () => {
    const req = { body: { text: "I am happy with this progress." } };
    const res = {
      json: jest.fn(),
    };

    const mockResponse = {
      data: {
        sents: [{ sentiment: "positive" }],
        overall: "positive",
        results: [{ sentiment: "positive", confidence: 0.9 }],
      },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    await Tone(req, res);

    expect(axios.post).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
      sentences: [{ sentiment: "positive" }],
      overallSentiment: "positive",
      detailedResults: [{ sentiment: "positive", confidence: 0.9 }],
    });
  });

  it("should handle missing text", async () => {
    const req = { body: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await Tone(req, res);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.send).toHaveBeenCalledWith(expect.stringContaining("Input text is required"));
  });
});
