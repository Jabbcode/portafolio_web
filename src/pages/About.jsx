import { ExperienceSupport } from '../components/ExperienceSupport';
import { Information } from '../components/Information';

import ImgPerfil from '../resources/img/perfil.jpg';

const informationData = [
    {
        'icon': 'bx bx-user',
        'body': 'Jefferson Brioso'     
    },
    // {
    //     'icon': 'bx bx-phone',
    //     'body': '+58 424 953 74 95'
    // },
    {
        'icon': 'bx bx-envelope',
        'body': 'jabbcodeoficial@gmail.com'
    },
]

const experience_supportData = [
    {
        'icon' : 'bx bx-medal',
        'subtitle': '+ 2 años',
        'small': 'Experiencia',
    },
    {
        'icon' : 'bx bx-briefcase',
        'subtitle': 'Diseño y desarrollo de aplicaciones web, tanto en el area del frontend como la del Backend',
        // 'small': 'Completed',
    },
    // {
    //     'icon' : 'bx bx-support',
    //     'subtitle': 'Support',
    //     'small': 'Online 24/7',
    // },
]

function About() {
    return (
        <section className="about section" id="about">
            <span className="section-subtitle">Mi introducción</span>
            <h2 className="section-title">Sobre mí</h2>

            <div className="about__container bd-grid">
                <div className="about__data">
                    <p className="about__description">
                        Hola, soy un desarrollador frontend, apasionado por crear y desarrollar 
                        aplicaciones web. Trabajo con diferentes herramientas, con las cuales poder 
                        cumplir con lo que tengas en mente. Tengo varios años de experiencia en 
                        esta área de trabajo con colaboraciones y varios proyectos de calidad.
                    </p>
                    <img src={ ImgPerfil } alt="Jefferson Brioso" className="about__img" />
                </div>

                <div>
                    <div className="about__information">
                        <h3 className="about__information-title">Información</h3>

                        { 
                            informationData.map( (data ) => {
                                return <Information key={data.icon} icon={ data.icon } body={ data.body } />   
                            }) 
                        }

                    </div>

                    <div className="about__information">
                        <h3 className="about__information-title">Experiencia</h3>
                        
                        { 
                            experience_supportData.map( (data ) => {
                                return <ExperienceSupport key={data.icon} icon={ data.icon } subtitle={ data.subtitle } small={ data.small } />
                            }) 
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export { About }
