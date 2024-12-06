/*
 *** rephrase.test.js
 ***
 *** Description : Unit test for the rephrase feature of the API
 ***               
 */

const axios = require("axios");
jest.mock("axios");
const { Rephrase } = require("../../../controller/saplingController");

describe("Rephrase Function Unit Test", () => {
  it("should return rephrased text", async () => {
    const req = { body: { text: "This is an example sentence." } };
    const res = {
      json: jest.fn(),
    };

    const mockResponse = { data: { results: ["Rephrased example sentence."] } };
    axios.post.mockResolvedValueOnce(mockResponse);

    await Rephrase(req, res);

    expect(axios.post).toHaveBeenCalled();
    expect(res.json).toHaveBeenCalledWith({
      rephrase: [
        {
          originalText: "This is an example sentence.",
          rephrasing: ["Rephrased example sentence."],
        },
      ],
    });
  });

  it("should handle missing text", async () => {
    const req = { body: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };

    await Rephrase(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.send).toHaveBeenCalledWith(expect.stringContaining("Invalid text."));
  });
});
