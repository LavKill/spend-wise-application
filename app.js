// IMPORT EXPRESS LIBRARY FOR SERVER RUN
const express = require('express');
const app = express();
const path = require('path');

const router = express.Router();
const res = require('express/lib/response');

// DEFINE THE SERVER PORT
const server = app.listen(3312, () => {
    console.log(`To open "Spend wise" application go to http://localhost:${server.address().port}`);
});

const index = require("./routes/index");

app.use(express.static(path.join(__dirname, 'public')));
app.use(index);

app.get('/', (req, res) => {
  res.status(200).json({info: 'preset text'});
})
 
//middleware
// app.use(express.json());
// res.send;

app.use((req, res, next) =>{
  res.status(404).send('<h1>Page not Found</h1>');
});