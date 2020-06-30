
const fs = require("fs");
const csv = require("csv");

csv.stringify([["foo", "bar"]]).pipe(fs.createWriteStream("tmp.log"));

fs.createReadStream("fixed.csv")
  .pipe(csv.transform((t) => t))
  .pipe(fs.createWriteStream("mapped.csv"));

