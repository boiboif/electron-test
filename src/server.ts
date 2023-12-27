import express from "express";

const server = express();

server.get("/", (req, res) => {
  res.json({
    data: "bbf",
  });
});

server.listen(18000, () => {
  console.log("express server run in locasthost:18000");
});
