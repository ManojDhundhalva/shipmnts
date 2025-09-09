const socketHandlers = (io) => {
    io.on("connection", (socket) => {
        socket.setMaxListeners(100);

        socket.on("editor:join-project", async ({ project_id, username, image }) => {
            socket.join(project_id);
            
            socket.on("editor:live-user-left-from-editor", (data) => {
                io.to(project_id).emit("editor:live-user-left", data);
            });

            socket.broadcast.to(project_id).emit("editor:live-user-joined", { username, image });
            socket.on("editor:live-user-joined-send-back", (data) => {
                io.to(project_id).emit("editor:live-user-joined-send-back", data);
            });

            socket.on("disconnect", async () => {
                io.to(project_id).emit("editor:live-user-left", { username });

                socket.broadcast
                    .to(project_id)
                    .emit("code-editor:remove-all-cursor", { username });

                await removeActiveLiveUser(username);
                socket.broadcast
                    .to(project_id)
                    .emit("code-editor:remove-active-live-user", { username });

            });
        });
    });
}

module.exports = socketHandlers;