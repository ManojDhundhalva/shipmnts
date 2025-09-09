const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Import Routes
const shipmentRoutes = require("./routes/shipments.routes");
const flightsRoutes = require("./routes/flights.routes");
const trackRoutes = require("./routes/track.routes");

// Routes
app.use('/shipments', shipmentRoutes);
app.use('/flights', flightsRoutes);
app.use('/track', trackRoutes);

module.exports = app;