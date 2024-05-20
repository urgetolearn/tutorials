const express = require("express");
const app = express();
const port = 3000;

app.use(express.static('public'))

//app.get app.put app.post app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("About page!");
});
app.get("/contact", (req, res) => {
  res.send("Connect with me!");
});
app.get("/blog", (req, res) => {
  res.send("Write your blogs!");
});
//url parameter
app.get(`/blog/:slug/:second`, (req, res) => {
  console.log(req.params)  
  console.log(req); 
  res.send(`Hello ${req.params.slug} and ${req.params.second}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
