import React from 'react'
import { Link } from 'react-router-dom';

function Navb( {isDarkmode,setisDarkmode}) {
  const toggleDarkMode = ( )=>{
    setisDarkmode(!isDarkmode)
  }
  return (
    <>
    <nav className="navbar navbar-expand-lg " data-bs-theme="light">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarColor03">
      <ul className="navbar-nav fs-6 ml-auto">
        
        <li className="nav-item">
          <a className="nav-link" href="#"><i onClick={toggleDarkMode} className={isDarkmode ? 'fa-solid fa-sun text-light' : 'fa-solid fa-moon text-dark'}></i></a>
        </li>
       
        
        
       
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}

export default Navb


