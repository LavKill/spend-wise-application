// IMPORT EXPRESS LIBRARY FOR SERVER RUN
const express = require('express');
const app = express();
const path = require('path');
const port = 3312;

const router = express.Router();
const res = require('express/lib/response');

// DEFINE THE SERVER PORT
const server = app.listen(process.env.PORT || port, () => console.log(`Example app is listening at http://localhost:${port}`));

const index = require("./routes/index");

app.use(express.static(path.join(__dirname, 'public')));
app.use(index);

app.get('/', (req, res) => {
  res.status(200).json({info: 'preset text'});
})

app.use((req, res, next) =>{
  res.status(404).send('<h1>Page not Found</h1>');
});