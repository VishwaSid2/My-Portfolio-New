import express from "express";
import cors from "cors";
const app = express();
console.log(app);

app.get("/", (req, res) => {
  //   console.log(req, res);
});

app.listen(3000, () => {
  console.log("Running On Port 3000 Move on.");
});
