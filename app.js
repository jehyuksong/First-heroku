const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

// bodyParser
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// get
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

// post
app.post("/", function (req, res) {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };

  const jsonData = JSON.stringify(data);

  const url = "https://us17.api.mailchimp.com/3.0/lists/51cba965fa";

  const options = {
    method: "POST",
    auth: "songjehyuk:b8420d4b1a39864e62b65c8af5265a11-us17",
  };

  const request = https.request(url, options, function (response) {
    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html");
    } else {
      res.sendFile(__dirname + "/failure.html");
    }
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });
  request.write(jsonData);
  request.end();
});

app.post("/gohome", function (req, res) {
  res.redirect("/");
});

// server running
app.listen(process.env.PORT || 3000, function () {
  console.log(`Server is running on port 3000...`);
});

