require("dotenv").config();
const express = require("express");
const server = express();

const PORT = process.env.PORT || 5000;

server.get("/api", (req, res) => {
    res.json({ message: `What the heck is even going on right now!?`})
})

server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
});