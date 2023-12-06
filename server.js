const express = require("express");
const app = express();
const port = 3000;

app.get("/", function (req, res) {
  if ((req.params.number_of_bottles = 99)) {
    res.send(
      `${req.params.number_of_bottles} Bottles of beer on the wall.<a href=/${
        req.params.number_of_bottles - 1
      }>take one down, pass it around</a>`
    );
  }
});

app.get("/:number_of_bottles", function (req, res) {
  if (req.params.number_of_bottles == 0) {
    res.send(
      `${req.params.number_of_bottles} Bottles of beer on the wall.<a href="/">start over</a>`
    );
  } else {
    res.send(
      `${req.params.number_of_bottles} Bottles of beer on the wall.<a href=/${
        req.params.number_of_bottles - 1
      }>take one down, pass it around</a>`
    );
  }
});

app.listen(port, () => {
  console.log("listening on port", port);
});
