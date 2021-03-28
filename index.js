const express = require("express");
const app = express();

const port = process.env.APP_PORT;

const cors = require("cors");
app.use(cors());

//Import routes
const wordsRouter = require("./routes/words");
app.use(express.json());
app.use("/", wordsRouter);

app.get("/", (req, res) => {
  res.send("I'm here");
});

app.listen(3000, () => {
  console.log(`Server wait you no http://localhost:3000`);
});
