const express = require("express");
const app = express();
const port = 6000;
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "chembeeragaton@gmail.com",
    pass: "ibpymdbsxgxjesra",
  },
});

const mailOptions = {
  from: "chembeeragaton@gmail.com",
  to: "chembeeragaton@gmail.com",
  subject: "sending email using nodejs",
  text: "hello and thank you",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("email sent: " + info.response);
  }
});

app.get("/", (req, res) => {
  res.send("test3");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
