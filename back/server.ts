import { Article } from "./../front/src/app/interfaces/article";
import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();
const port = 3000;
const publicDir = "../front/dist/front";

const articles: Article[] = [
  { name: "Tournevis cruciforme", price: 2.4, qty: 123 },
  { name: "Pince", price: 5, qty: 68 },
  { name: "Pelle", price: 8.54, qty: 5 },
];

app.use(cors());

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.use("/api/date", (req, res) => {
  res.json({ date: new Date() });
});

app.get("/api/articles", (req, res) => {
  res.json(articles);
});

app.use(express.static(publicDir));
app.use(
  serveIndex(publicDir, {
    icons: true,
  })
);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
console.log("about to start the web server");
