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
    path:'/formularios',
    element: <Dashboard></Dashboard>
  },
  {
    path:'/iniciarsesion',
    element: <Login></Login>
  }
])
function App() {

  return (
      <div className='app-container'> 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">
              <img src={logoUCP} width="40" alt='logoUCP' style={{marginLeft:'20px'}}></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="/formularios"> Formularios <span className="sr-only"></span></a>
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
                <li className="nav-item">
                  <a className="nav-link" href="/iniciarsesion"> Iniciar Sesion </a>
                </li>
              </ul>
            </div>
            <button className='nav-menu'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
              </button>
        </nav>
        
        <RouterProvider router={router}>
          <Dashboard></Dashboard>
          <Login></Login>
        </RouterProvider>
      </div>
  )
}

export default App
