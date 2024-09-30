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
  