const express = require("express");
const app = express();
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();
const PORT = 4000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "https://ryki-website-client.vercel.app"],
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.send("test");
});

app.post("/api", (req, res) => {
  const { name, email, telephone, message } = req.body;

  const mailOptions = {
    from: {
      name: "Ryki",
      address: "admin@ryki.io",
    },
    to: "admin@ryki.io",
    subject: "Ryki - A message from Contact Form",
    text: `
    Name: ${name}
    Email: ${email}
    Telephone: ${telephone}
    Message: ${message}`,
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      res
        .status(500)
        .json({ status: "error", message: "Something went wrong!" });
    } else {
      res.status(200).json({ status: "ok", message: "Email Sent!" });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
