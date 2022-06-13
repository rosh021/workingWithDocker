import express from "express";

import connectToDatabase from "./connection.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>Hello From the server<h2>");
});

await connectToDatabase;

app.listen(3000);
