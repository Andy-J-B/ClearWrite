require("dotenv").config({ path: "./server/.env" });

const supertest = require("supertest");
const app = require("../../../app"); // Your Express app

describe("POST /aidetect", () => {
  it("should return AI detection results (real API)", async () => {
    const response = await supertest(app).post("/aidetect").send({
      text: "This is an example sentence.",
    });

    expect(response.status).toBe(200);
    expect(response.body.detection).toBeDefined();
    expect(response.body.detection.results.length).toBeGreaterThan(0);
  });

  it("should return 400 if text is missing", async () => {
    const response = await supertest(app).post("/aidetect").send({});

    expect(response.status).toBe(400);
    expect(response.body.error).toContain("Input text is required");
  });
});