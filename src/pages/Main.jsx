import React from 'react';
import ImgPerfil from '../resources/img/perfil.jpg';



function Main() {
    return (
        <main className="l-main" id="inicio">
            <div className="home__container bd-grid">
                <div className="home__data">
                    <div className="home__img">
                    <img src={ ImgPerfil } alt="Jefferson Brioso" />
                    </div>

                    <h1 className="home__title">Jefferson Brioso</h1>
                    <span className="home__profession">Frontend Developer</span>

                    <div className="home__social">
                        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/jeffersonbrioso/" className="home__social-link">
                            <i className="bx bxl-linkedin"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://github.com/Jabbcode" className="home__social-link">
                            <i className="bx bxl-github"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://twitter.com/Jabbcode" className="home__social-link">
                            <i className="bx bxl-twitter"></i>
                        </a>
                        <a target="_blank" rel="noreferrer" href="https://www.instagram.com/Jabbcode/" className="home__social-link">
                            <i className="bx bxl-instagram"></i>
                        </a>
                    </div>

                    <a download="CV.pdf" href="#a" className="button home__button">Descargar CV</a>
                </div>
            </div>
        </main>
    )
}

export { Main };
