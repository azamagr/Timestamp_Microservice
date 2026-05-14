// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// helper function to check invalid date
const isInvalidDate = (date) => date.toUTCString() === "Invalid Date";

// your API endpoint
app.get("/api/:date?", function (req, res) {
  let dateString = req.params.date;

  // ✅ if no date is provided → return current time
  if (!dateString) {
    const now = new Date();
    return res.json({
      unix: now.getTime(),
      utc: now.toUTCString()
    });
  }

  let date = new Date(dateString);

  // if invalid date and it's a number timestamp
  if (isInvalidDate(date)) {
    date = new Date(+dateString);
  }

  // if still invalid, return error
  if (isInvalidDate(date)) {
    return res.json({ error: "Invalid Date" });
  }

  // return JSON response
  res.json({
    unix: date.getTime(),
    utc: date.toUTCString(),
  });
});

// Listen on port set in environment variable or default to 5000
// Bind to 0.0.0.0 for Replit environment
var listener = app.listen(process.env.PORT || 5000, '0.0.0.0', function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
