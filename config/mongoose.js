const mongoose = require("mongoose");

//connect to DB
mongoose.connect(
  "mongodb+srv://rschauhan1402:rohit2001@cluster0.pdsfktf.mongodb.net/",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to db"));

db.once("open", function () {
  console.log("Successfully connected to db");
});
