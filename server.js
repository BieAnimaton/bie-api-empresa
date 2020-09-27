const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;
const mysql = require('mysql')

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//rotas
app.get('/api', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/api', require('./src/rotas'));

app.listen(port);
console.log('API funcionando!');