"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
app.use(express.json());
var UserRoute_1 = require("./routes/UserRoute");
app.use('/', UserRoute_1.default);
app.listen(5000, function () {
    console.log('Server is running on port 5000..........!');
});
