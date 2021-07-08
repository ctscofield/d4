const dotenv = require("dotenv").config(); //eslint-disable-line

const express = require("express");
const cors = require("cors");
const server = express();
const PORT = process.env.PORT || 5000;
const path = require("path");

server.use(cors());
server.use(express.json());
server.use(express.static(path.join(__dirname, "client/build")));


server.use("/api", (req, res) => {
    res.json({ message: `What the heck is even going on right now on ${PORT}!?`})
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});