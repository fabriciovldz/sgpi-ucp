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


app.post('/iniciarsesion', (req, res) => {
  const { nombre, contraseña } = req.body;

  if (!nombre || !contraseña) {
    return res.status(400).send('Por favor, ingresa nombre y contraseña');
  }

  const query = 'SELECT * FROM usuarios WHERE nombre = ? AND contraseña = ?';

  db.query(query, [nombre, contraseña], (err, result) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err); 
      return res.status(500).send('Error al iniciar sesión');
    }

    if (result.length > 0) {
      res.send('Inicio de sesión exitoso');
    } else {
      res.status(401).send('Credenciales incorrectas');
    }
  });
});

app.listen(4001, () => {
  console.log('Servidor activo en el puerto 4001');
});

