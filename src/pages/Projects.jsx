import React from 'react'
import ImgPerfil from '../resources/img/perfil.jpg';


function Projects() {
    return (
        <section className="project section">
            <div className="project__container bd-grid">
                <div className="project__data">
                    <h2 className="section-title project__title">¿Tienes un proyecto en mente?</h2>

                    <p className="project__description">Si tienes un proyecto que quieres llevar a cabo, no lo dudes y cuéntame qué es, y qué servicios puedo ofrecerte, contáctame directamente aquí.</p>
                    <a href="#contact" className="button button__light">Contáctame</a>
                </div>

                <img src={ ImgPerfil } alt="Project in Mind"  className="project__img"/>
            </div>
        </section>
    )
}

export { Projects };
