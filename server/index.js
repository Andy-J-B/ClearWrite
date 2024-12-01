// Import express; axios
const app = require("./app");

// Load environment variables from .env file
require("dotenv").config();

// Start port
const port = 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));

module.exports = app;
