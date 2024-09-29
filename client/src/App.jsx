import './App.css'
import logoUCP from './assets/iconUCP.png';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard'
import {
  createBrowserRouter,
  RouterProvider
}from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:'/',
    element: <div></div>
  },
  {
    path:'/sistemasgpi',
    element: <div><Dashboard></Dashboard></div>
  },
  {
    path:'/iniciarsesion',
    element: <div><Login></Login></div>
  }
])
function App() {

  return (
      <div> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img src={logoUCP} width="40" alt='logoUCP' style={{marginLeft:'20px'}}></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/formularios"> Formularios <span className="sr-only">(Actualmente)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/reportes"> Reportes </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/ayuda"> Ayuda </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="/admin"> Administrador </a>
                </li>
              </ul>
            </div>
        </nav>
        <RouterProvider router={router}>
          <Dashboard></Dashboard>
          <Login></Login>
        </RouterProvider>
      </div>
  )
}

export default App
