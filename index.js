const express = require("express");
const server = express();
const Tasks = require("./routes/Tasks");
const Projects = require("./routes/Projects");
const Resources = require("./routes/Resources");

const host = process.env.HOST || "0.0.0.0";
const port = process.env.PORT || 8080;

server.use(express.json());

server.use("/api/Tasks", Tasks);
server.use("/api/Projects", Projects);
server.use("/api/Resources", Resources);

server.use((req, res, next) => {
  console.log(
    `Method Used: ${req.method} --- URL Used: ${
      req.originalUrl
    } ---- TimeStamp: ${new Date()} `
  );
  next();
});

server.use((err, req, res, next) => {
  console.log(err),
    res.status(500).json({
      message: "Internal error occured, please try again later!"
    });
});
server.listen(port, host, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
