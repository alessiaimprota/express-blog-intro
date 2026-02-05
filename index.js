const express = require("express");
const app = express();
const port = 3000;

const posts = [
  {
    id: 1,
    title: "ciambellone",
    img: "public/images/ciambellone.jpeg",
  },
  {
    id: 2,
    title: "cracker barbabietola",
    img: "public/images/cracker_barbabietola.jpeg",
  },
];

console.log(posts);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json(posts);
});

app.listen(port, () => {
  console.log("ci sei");
});
