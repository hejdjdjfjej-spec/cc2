const express = require("express");

var app = express();

// Multiplication service
app.get("/mul/:num_1/:num_2", function (req, res) {

    const num1 = req.params.num_1;
    const num2 = req.params.num_2;

    const result = parseInt(num1) * parseInt(num2);

    res.json({ result: result });
});

// Run server
app.listen(3300, function () {
    console.log("Server running on port 3300");
    console.log("http://localhost:3300/mul/2/3");
});