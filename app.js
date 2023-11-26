const express = require("express");
const app = express();

const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");

app.use(cors());

mongoose.connect(process.env.DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>console.log("연결됨"));

// app.use(
//     express.urlencoded({ extended: true })
// );

// app.use(express.json());