const express = require("express");
const app = express();

const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");

app.use(cors());

app.get("/", async (req, res) => {
    console.log("데이터 이동중")
    Room.insertMany([
      {
        room: "자바스크립트 단톡방",
        members: [],
      },
      {
        room: "리액트 단톡방",
        members: [],
      },
      {
        room: "NodeJS 단톡방",
        members: [],
      },
    ])
      .then(() => res.send("ok"))
      .catch((error) => res.send(error));
  });

mongoose.connect(process.env.DB, {
    useNewUrlParser:true,
    useUnifiedTopology: true,
}).then(()=>console.log("연결됨"));


// app.use(
//     express.urlencoded({ extended: true })
// );

// app.use(express.json());