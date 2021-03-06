require("dotenv").config();
console.log(process.env.JWT_SECRET);
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const logger = require("morgan");
const mongoose = require("mongoose");
const routes = require("./app_api/routes/index.routes");

const PORT = process.env.PORT || 3001;


app.use(express.static('app_client/build'))
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(logger("dev"));

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/auth";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI, {
  useMongoClient: true
});

// mongoose.connect("mongodb://localhost/auth");
// By default mongoose uses callbacks for async queries, we're setting it to use promises (.then syntax) instead
// Connect to the Mongo DB
// mongoose.Promise = Promise;

app.use(routes);

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
});