import express from "express";
import serveIndex from "serve-index";

const app = express();
const port = 3000;
const publicDir = "../front/dist/front";

app.use((req, res, next) => {
  console.log("req: ", req.url);
  next();
});

app.use("/api/date", (req, res) => {
  res.json({ date: new Date() });
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
