import './App.css'
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
              <img src="./assets/logo.png" width='30' alt='logoUCP'></img>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" href="#">Disabled</a>
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
