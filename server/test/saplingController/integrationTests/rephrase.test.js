if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "./server/.env" });
}

const supertest = require("supertest");
const app = require("../../../app"); // Your Express app

describe("POST request to /rephrase", () => {
  test("Simple request", async () => {
    const text =
      "Writing well is a skill that opens doors to countless opportunities.";
    const response = await supertest(app)
      .post("/rephrase") // POST request to /api/submit
      .send({ text }) // Send the request body as JSON
      .set("Content-Type", "application/json"); // Set the headers

    // Assertions
    expect(response.body).toEqual({
      rephrase: [
        {
          originalText:
            "Writing well is a skill that opens doors to countless opportunities.",
          rephrasing: [
            {
              hash: "9caa16ed-b315-5120-9b36-544c3a65a83a",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The ability to write effectively unlocks a multitude of prospects.",
            },
            {
              hash: "5238730d-c59d-5f06-b3a1-785495aa11a6",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "A proficient writing skill grants access to an abundance of possibilities.",
            },
            {
              hash: "64125733-cc9c-5342-a4e3-f517c08f5775",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Mastering the craft of writing provides the key to numerous opportunities.",
            },
            {
              hash: "3cad6eeb-492e-5822-a4bb-bedff03bace2",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "The art of writing well holds the power to unlock a vast array of chances.",
            },
            {
              hash: "240fcf35-6146-598a-a8b1-51f31bf7fbbc",
              model_version: "v20240207",
              original:
                "Writing well is a skill that opens doors to countless opportunities.",
              rephrase_type: "informal_to_formal",
              replacement:
                "Adept writing abilities grant entrance to a plethora of opportunities.",
            },
          ],
        },
      ],
    }); // Assert the response body
  });
});

afterAll(() => {
  // Close any database connections, mock servers, etc.
  // Example for stopping an Express app server if needed:
  if (app.server) {
    app.server.close();
  }
});
