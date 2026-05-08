const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// TEST ROUTE (checks backend is alive)
app.get("/api/test", (req, res) => {
  res.json({ message: "Backend is working" });
});

// AI ROUTE (your “fake AI” that works instantly)
app.post("/api/ai", (req, res) => {
  const prompt = req.body.prompt || "";

  let answer = "";

  if (prompt.toLowerCase().includes("list")) {
    answer = "A list stores multiple values in one variable.";
  } else if (prompt.toLowerCase().includes("loop")) {
    answer = "A loop repeats code over a list or condition.";
  } else {
    answer = "AI Response: " + prompt;
  }

  res.json({ answer });
});

// START SERVER
app.listen(8085, () => {
  console.log("Backend running on http://localhost:8085");
});