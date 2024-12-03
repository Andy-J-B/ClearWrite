require("dotenv").config({ path: "./server/.env" });

const supertest = require("supertest");
const app = require("../../../app"); // Your Express app

describe("POST /sentiment", () => {
  it("should return sentiment analysis results (real API)", async () => {
    const response = await supertest(app).post("/sentiment").send({
      text: "I am extremely happy with this progress!",
    });

    expect(response.status).toBe(200);
    expect(response.body.sentences).toBeDefined();
    expect(response.body.overallSentiment).toBeDefined();
    expect(response.body.sentences.length).toBeGreaterThan(0);
  });

  it("should return 400 if text is missing", async () => {
    const response = await supertest(app).post("/sentiment").send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toContain("Input text is required");
  });
});