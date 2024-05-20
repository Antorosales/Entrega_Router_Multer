const express = require('express');
const app = express();
const port = 8080;
const path = require("path")
const productsRouter = require("./routes/products.router.js")

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname,"public")))



app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,"public","index.html"));
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto${port}`);
});


app.use("/",productsRouter);
