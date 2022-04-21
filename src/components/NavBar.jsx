import React from 'react'
import logo from '../logo.png'


const NavBar = () => {
  return (
      
    <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container-fluid">
            <a classNameName="navbar-brand" href="#">
                <img src={logo} alt="" width="250" height="75"/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">FACIAL</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CAPILAR</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">CORPORAL</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">MAQUILLAJE</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            MARCAS
                        </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Athos</a></li>
                        <li><a className="dropdown-item" href="#">Atenea</a></li>
                        <li><a className="dropdown-item" href="#">Lubriderm</a></li>
                        <li><a className="dropdown-item" href="#">Nivea</a></li>
                        <li><a className="dropdown-item" href="#">Nouvelle</a></li>
                        <li><a className="dropdown-item" href="#">Samy</a></li>
                        <li><a className="dropdown-item" href="#">Skala</a></li>
                        <li><a className="dropdown-item" href="#">Tonos</a></li>
                        <li><a className="dropdown-item" href="#">Visalia</a></li>
                        <li><a className="dropdown-item" href="#">Vogue</a></li>
                    </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>



  )
}

export default NavBar