// Import express; axios
const express = require("express");
const axios = require("axios");

// Initiate express
const app = express();
app.use(express.json());

// Use Routers to clean up code
const router = express.Router();
const textGearsRoute = require("./routers/textGears");

// Load environment variables from .env file
require("dotenv").config();

// Routers
app.use("/", textGearsRoute);

// Routes
app.use(router);

// Start port
const port = process.env.PORT;
app.listen(port, () => console.log(`Server running on port ${port}`));
