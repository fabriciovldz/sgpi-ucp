import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUsuario } from '../../context/userContext';
import './Login.css';

const Login = () => {
  const [nombre, setNombre] = useState(''); 
  const [contraseña, setContraseña] = useState(''); 
  const navigate = useNavigate();
  const { setUsuario } = useUsuario(); // Obtener el setUsuario del contexto

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log('Datos enviados:', { nombre, contraseña });

    try {
      const response = await fetch('http://localhost:4001/iniciarsesion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, contraseña }),
      });

      // Revisar el tipo de respuesta antes de parsear
      const contentType = response.headers.get('Content-Type');
      let result;

      if (contentType && contentType.includes('application/json')) {
        result = await response.json(); // Parsear como JSON si el backend devuelve JSON
      } else {
        result = await response.text(); // De lo contrario, parsear como texto
      }

      if (response.ok) {
        console.log('Respuesta del servidor:', result);

        // Si la respuesta es texto, ajusta cómo extraer el usuario.
        if (typeof result === 'string') {
          result = { usuario: { nombre: nombre } }; // Ajustar esto a la estructura esperada
        }

        // Guardar el usuario en el contexto y en localStorage
        setUsuario(result.usuario);
        localStorage.setItem('usuario', JSON.stringify(result.usuario));

        alert('Inicio de sesión exitoso');
        navigate('/formularios');
      } else {
        console.error('Error en la respuesta:', result);
        alert(`Credenciales incorrectas o error en el servidor: ${result}`);
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