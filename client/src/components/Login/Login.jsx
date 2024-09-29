import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [nombre, setNombre] = useState(''); 
  const [contraseña, setContraseña] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar en la consola qué datos se están enviando
    console.log('Datos enviados:', { nombre, contraseña });

    try {
      const response = await fetch('http://localhost:4001/iniciarsesion',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre, 
          contraseña, 
        }),
      });

      // Procesar la respuesta del servidor
      if (response.ok) {
        const result = await response.text();
        console.log(result);
        alert('Inicio de sesión exitoso');
        navigate('/formularios'); 
      } else {
        const errorMessage = await response.text();
        console.error('Error en la respuesta:', errorMessage);
        alert(`Credenciales incorrectas o error en el servidor: ${errorMessage}`);
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      alert('Ocurrió un error en la solicitud. Inténtalo nuevamente.');
    }
  };

  return (
    <div className="login-page">
      <div className="form-container">
        <div className="image-holder"></div>
        <form onSubmit={handleSubmit}>
          <h2 className="text-center"><strong>SGPI</strong> UCP</h2>
          <div className="form-group">
            <input
              className="form-control"
              type="text"
              name="nombre"
              placeholder="Nombre de Usuario"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              name="contraseña"
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <button className="btn btn-primary btn-block" type="submit">
              Acceder
            </button>
          </div>
          <a href="#" className="already">¿Olvidó su nombre de usuario o contraseña?</a>
        </form>
      </div>
    </div>
  );
};

export default Login;
