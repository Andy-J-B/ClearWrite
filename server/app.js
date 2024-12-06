/*
 *** app.js
 ***
 *** Description : Main file for the server
 ***
 */

// Import express; axios
const express = require("express");
const cors = require("cors");

// Initiate express and cors
const app = express();
app.use(express.json());
app.use(cors());

// Use Routers to clean up code
const router = express.Router();
const textGearsRoute = require("./routers/textGears");
const saplingRoute = require("./routers/sapling");

// Load environment variables from .env file
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

// Routers
app.use("/", textGearsRoute);
app.use("/", saplingRoute);

// Routes
app.use(router);

// Export app
module.exports = app;
