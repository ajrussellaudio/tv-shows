const express = require("express");
const next = require("next");
const path = require("path");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

const apiStub = require("./stubs/apiStub");

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("/p/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { id: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.use("/api", apiStub);

    server.use(express.static(path.resolve(__dirname, "assets/fonts")));

    server.get("*", (req, res) => handle(req, res));

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Listening on http://localhost:3000");
    });
  })
  .catch(err => {
    console.error(err.stack);
    process.exit(1);
  });
