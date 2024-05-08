const { getDateTime } = require("./db");

const express = require("express");
const morgan = require("morgan");

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan("tiny"));

app.get("/", async (req, res) => {
  const dateTime = await getDateTime();
  const response = dateTime;
  response.api = "node";
  response.version = 2;
  res.send(response);
});

app.get("/ping", async (_, res) => {
  res.send("pong");
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

process.on("SIGTERM", () => {
  console.debug("SIGTERM signal received: closing HTTP server");
  server.close(() => {
    console.debug("HTTP server closed");
  });
});
