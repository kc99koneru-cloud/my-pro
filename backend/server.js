const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/api/message", (req, res) => {
    res.json({
        message: "Hello from Docker Backend!"
    });
});

const PORT = 5000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});
