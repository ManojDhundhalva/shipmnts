const express = require("express");
const cors = require("cors");
const corsConfig = require("./config/cors");

const app = express();

// Middleware
app.use(cors(corsConfig));
app.use(express.json());

// Routes
const todoRoutes = require("./routes/todo.routes");

// Routes
app.use('/todos', todoRoutes);

module.exports = app;

// For socket
const http = require("http");
const server = http.createServer(app);
const io = initIO(server);
socketHandlers(io);
server.listen(PORT, () => console.log(`App listening on port ${PORT}`));