import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
  // res.status(200).json({ message: "Hello" });
});

app.listen(3000, () => {
  console.log(`Serser running on port http://localhost:${3000}`);
});
