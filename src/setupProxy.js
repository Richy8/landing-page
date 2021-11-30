const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    proxy("/youtube", {
      target: "https://youtu.be/EWftcHly-HQ",
      changeOrigin: true,
    })
  );
};
