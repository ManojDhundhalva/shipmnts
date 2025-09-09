const { Server } = require("socket.io");

const initIO = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
            methods: ['GET', 'POST'],
            allowedHeaders: "*",
            credentials: true,
            transports: ['websocket', 'polling']
        }
    });
    return io;
}

module.exports = initIO;