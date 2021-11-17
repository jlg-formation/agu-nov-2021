import { Article } from "./../front/src/app/interfaces/article";
import express from "express";
import serveIndex from "serve-index";
import cors from "cors";

const app = express();
const port = 3000;
const publicDir = "../front/dist/front";

const generateId = () => Date.now() + "_" + Math.floor(Math.random() * 1e6);

let articles: Article[] = [
  { id: "a1", name: "Tournevis cruciforme", price: 2.4, qty: 123 },
  { id: "a2", name: "Pince", price: 5, qty: 68 },
  { id: "a3", name: "Pelle", price: 8.54, qty: 5 },
];

app.use(cors());
app.use(express.json());

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

app.post("/api/articles", (req, res) => {
  const article: Article = req.body;
  article.id = generateId();
  articles.push(article);
  res.status(201).json(article);
});

app.delete("/api/articles", (req, res) => {
  const ids: string[] = req.body;
  articles = articles.filter((a) => !ids.includes(a.id));
  res.status(204).end();
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
