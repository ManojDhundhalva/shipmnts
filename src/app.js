const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const shipmentRoutes = require("./routes/shipments.routes");

// Routes
app.use('/shipments', shipmentRoutes);

module.exports = app;
