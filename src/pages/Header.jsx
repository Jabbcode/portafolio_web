import React, { useState } from 'react'
import '../resources/styles/global.css';
// import svg from '../resources/img/wave.svg';


function Header() {
    const [show, setShow] = useState(false);

    return (
        <header className="l-header">
            <nav className="nav bd-grid">
                <div className="nav__toggle" id="nav-toggle">
                    <i className='bx bx-menu' onClick={ () => setShow(!show) }></i>
                </div>

                <div>
                    <a href='#inicio' className='nav__logo'>Jefferson</a>
                </div>

                <div className={`nav__menu ${show && 'show'}`} id="nav-menu">
                    <div className="nav__close" id="nav-close">
                        <i className='bx bx-x' onClick={ () => setShow(!show) }></i>
                    </div>

                    <ul className="nav_list">
                        <li className="nav__item"> 
                            <a href="#inicio" className="nav__link active">Inicio</a>
                        </li>
                        <li className="nav__item"> 
                            <a href="#about" className="nav__link">Sobre mi</a>
                        </li>
                        <li className="nav__item"> 
                            <a href="#skills" className="nav__link">Habilidades</a>
                        </li>
                        <li className="nav__item"> 
                            <a href="#services" className="nav__link">Servicios</a>
                        </li>
                        <li className="nav__item"> 
                            <a href="#works" className="nav__link">Trabajos</a>
                        </li>
                        <li className="nav__item"> 
                            <a href="#contact" className="nav__link">Contactame</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export { Header };
