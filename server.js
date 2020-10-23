const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const cors = require('cors');
const mysql = require('mysql');

//body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//rotas
app.get('/api', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/api', require('./src/rotas'));

app.listen(process.env.PORT || 8080);

console.log('API funcionando!');