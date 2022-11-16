const express = require("express");
const cors = require("cors");
const app = express();
console.log('dupa');
app.use(cors());
app.use(express.json());

const todoList = [];

app.get("/", (req, res) => {
  res.send("Serwer działa!");
});

const port = process.env.PORT || 8888;

app.listen(port, () => {
  console.log(`Aplikacja wystrtowała na porcie ${port}`);
});