// Import express; axios
const app = require("./app");

// Load environment variables from .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Start port
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

module.exports = app;
