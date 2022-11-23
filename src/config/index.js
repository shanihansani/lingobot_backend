// Custom configurations
const configs = {
  DB_CONNECTION: process.env.MONGO_DB_URL,
  JWT_PRIVATE_KEY: process.env.JWT_KEY,
};

module.exports = configs;
