import express from "express";

const app = express();

import csv from "csv-parser";
import fs from "fs";

const results = [];

fs.createReadStream("test.csv")
  .pipe(csv({}))
  .on("data", async (data) => await results.push(data))
  .on("end", () => {
    console.log(results.json());
  });

app.get("/", (req, res) => {
  res.send(results);
});

app.listen(3000, () => {
  console.log("listening to the server");
});
