const functions = require("firebase-functions");
const admin = require("firebase-admin");
require("dotenv").config();

const serviceAccountKey = require("./serviceAccountKey.json");

const express = require("express");
const app = express();

// Body parser for our JSON Data
app.use(express.json());

// cross origin
const cors = require("cors");
app.use(cors({ origin: true }));
app.use((res, req, next) => {
  req.set("Access-Control-Allow-Origin", "*");
  next();
});

// firebase credentials
admin.initializeApp({
  credential: admin.credential.cert(serviceAccountKey),
});


//api endpoints
app.get("/", (req,res) => {
    return res.send('hello world');
})

const userRoute = require('./routes/user')
app.use("/api/users", userRoute)

exports.app = functions.https.onRequest(app);

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");
