require("dotenv").config();

const config = {
    PORT: Number(process.env.PORT) || 3000,
};

module.exports = config;