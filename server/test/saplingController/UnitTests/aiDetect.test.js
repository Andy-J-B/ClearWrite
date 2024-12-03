const axios = require("axios");
jest.mock("axios");
const { AiDetect } = require("../../../controller/saplingController");

describe("AiDetect Function Unit Test", () => {
  it("should return AI detection results", async () => {
    const req = { body: { text: "This might be AI-generated." } };
    const res = {
      json: jest.fn(),
    };

    const mockResponse = {
      data: { score: 0.85, sentence_scores: [0.8, 0.9] },
    };
    axios.post.mockResolvedValueOnce(mockResponse);

    await AiDetect(req, res);

    expect(axios.post).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
      overallScore: 0.85,
      sentenceScores: [0.8, 0.9],
    });
  });

  it("should handle missing text", async () => {
    const req = { body: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await AiDetect(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith(expect.stringContaining("Invalid text."));
  });
});