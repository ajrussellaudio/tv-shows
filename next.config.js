const isDevelopment = process && process.env.NODE_ENV !== "production";

const API_URL = "https://api.tvmaze.com";
const DEV_API_URL = `http://localhost:3000/api`;

module.exports = {
  publicRuntimeConfig: {
    apiUrl: isDevelopment ? DEV_API_URL : API_URL
  }
};
