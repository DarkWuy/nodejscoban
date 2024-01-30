const express = require('express');
// import expres from 'express';
const app = express(); //app express
require('dotenv').config();
const port = process.env.PORT||8888 ;
const hostname = process.env.HOST_NAME;
const path = require('path');

//khai báo template engine 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// khai báo route
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/abc', (req, res) => {
  res.render('sample.ejs');
})
app.listen(port,hostname, () => {
  console.log(`Example app listening on port ${port}`)
})
