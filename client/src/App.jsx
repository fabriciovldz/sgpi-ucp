import './App.css';
import logoUCP from './assets/iconUCP.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './components/Login/Login';
import Dashboard from './components/Dashboard/Dashboard';
import { UserProvider, useUsuario } from './context/userContext';

const HandleLinks = () => {
  const { usuario, setUsuario } = useUsuario();

  const handleLogout = () => {
    setUsuario(null); // Eliminar el usuario del contexto
    localStorage.removeItem('usuario'); // Eliminar el usuario de localStorage
    alert('Sesión cerrada');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <img src={logoUCP} width="40" alt="logoUCP" style={{ marginLeft: '20px' }} />
      </a>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/formularios"> Formularios 
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/reportes" data-tip="Ver reportes"> Reportes </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ayuda" data-tip="Obtener ayuda"> Ayuda </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link disabled" to="/admin" data-tip="Área de administración"> Administrador </Link>
          </li>
          {usuario ? (
                <>
                <li className="nav-item">
                  <span className="nav-link">Bienvenido, {usuario.nombre}</span>
                </li>
                <li className="nav-item ml-auto"> 
                  <button className="btn btn-secondary" onClick={handleLogout} style={{ marginLeft: 20 }}>
                    Cerrar Sesión
                  </button>
                </li>
              </>
          ) : (
            <li className="nav-item">
              <Link className="nav-link" to="/iniciarsesion" data-tip="Iniciar sesión en tu cuenta"> Iniciar Sesión </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

function App() {
  return (
    <UserProvider>
      <Router>
        <div className="app-container">
          <HandleLinks />
          <Routes>
            <Route path="/" element={<div>Inicio</div>} />
            <Route path="/formularios" element={<Dashboard />} />
            <Route path="/iniciarsesion" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
}

export default App;