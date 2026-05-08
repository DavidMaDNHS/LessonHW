const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/ai", (req, res) => {
  const prompt = req.body.prompt || "";

  let answer = "";

  if (prompt.toLowerCase().includes("loop")) {
    answer = "A loop repeats instructions over data.";
  } else if (prompt.toLowerCase().includes("list")) {
    answer = "A list stores multiple related values.";
  } else {
    answer = "AI Response: " + prompt;
  }

  res.json({ answer });
});

app.listen(8085, () => {
  console.log("Backend running on http://localhost:8085");
});