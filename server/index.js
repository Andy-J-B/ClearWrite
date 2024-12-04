// Import express; axios
const app = require("./app");

// Load environment variables from .env file
require("dotenv").config();

// Start port
app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);

module.exports = app;
