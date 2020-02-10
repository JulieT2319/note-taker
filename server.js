//dependencies
let express = require("express");
let path = require("path");
let fs = require("fs");

//Express defines
let app = express();
let PORT = process.env.PORT || 3000;

//express data handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
