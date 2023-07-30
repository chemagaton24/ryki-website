const express = require("express");
const app = express();
const port = 6000;
const sendmail = require("sendmail")();

sendmail(
  {
    from: "chembeeragaton@gmail.com",
    to: "chembeeragaton@gmail.com",
    subject: "test sendmail",
    html: "Mail of test sendmail ",
  },
  function (err, reply) {
    console.log(err && err.stack);
    console.dir(reply);
  }
);

app.get("/", (req, res) => {
  res.send("test2");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
