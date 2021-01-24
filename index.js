import express from "express";
import dotenv from "dotenv";
import SalesRecords from "./Model/salesRecords.js";
dotenv.config({ path: "./config.env" });

import "./config/database_connect.js";

const app = express();

import csv from "csv-parser";
import fs from "fs";

let readable = fs
  .createReadStream("test.csv")
  .pipe(
    csv({
      mapHeaders: ({ header, value }) =>
        header.split(" ").join("_").toLowerCase(),
    })
  )
  .on("data", (records) => {
    readable.pause();
    for (let record in records) {
      SalesRecords.sync({ force: true })
        .then(() => {
          return SalesRecords.create({
            region: record.region,
            country: record.country,
          });
        })
        .catch((err) => console.log(err));
    }
    readable.resume();
  })
  .on("end", () => {
    console.log("Job is done");
  })
  .on("error", (error) => {
    console.log(error);
  });

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening to :${PORT}`);
});
