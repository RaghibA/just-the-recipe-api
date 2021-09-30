const express = require('express');
const chalk = require('chalk')

let app = express()
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Router Imports
const scrapeRouter = require('./routers/scrapeRouter')

// INIT Express app
const port = process.env.PORT || 3003
app.use(express.json())
app.use(scrapeRouter)

app.listen(port, function(err) {
  if (err) return console.log(err);
  console.log(chalk.inverse.blue("Listening at port " + port));
});