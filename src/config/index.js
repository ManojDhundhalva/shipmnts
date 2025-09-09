require("dotenv").config();

const config = {
    PORT: Number(process.env.PORT) || 8000,
};

module.exports = config;