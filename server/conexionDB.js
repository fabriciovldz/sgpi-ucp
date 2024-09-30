const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(cors());
app.use(express.json()); 

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sgpi',
  port: 4001,
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err); 
    return;
  }
  console.log('Conectado a la base de datos MySQL en puerto 4000');
});

app.listen(4001, () => {
  console.log('Servidor activo en el puerto 4001');
});

