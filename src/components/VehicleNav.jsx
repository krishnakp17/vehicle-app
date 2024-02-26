import React from 'react'
import { Link } from 'react-router-dom'

const VehicleNav = () => {
  return (
    <div>


<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Employee App</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Add vehicle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/search">Search vehicle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/delete">Delete vehicle</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/view">View vehicle</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default VehicleNav