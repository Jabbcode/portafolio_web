import { WorksContent } from '../components/WorksContent';
import ImgPerfil from '../resources/img/perfil.jpg';

const worksData = [
    // {
    //     routeImg: ImgPerfil,
    //     link: '',
    //     alt: 'Work 1',
    //     title: 'Work 1' 
    // },
    // {
    //     routeImg: ImgPerfil,
    //     link: '',
    //     alt: 'Work 2',
    //     title: 'Work 2' 
    // },
    // {
    //     routeImg: ImgPerfil,
    //     link: '',
    //     alt: 'Work 3',
    //     title: 'Work 3' 
    // },
    // {
    //     routeImg: ImgPerfil,
    //     link: '',
    //     alt: 'Work 4',
    //     title: 'Work 4' 
    // },
    // {
    //     routeImg: ImgPerfil,
    //     link: '',
    //     alt: 'Work 5',
    //     title: 'Work 5' 
    // },
    // {
    //     routeImg: ImgPerfil,
    //     link: '',
    //     alt: 'Work 6',
    //     title: 'Work 6' 
    // },
]


function Works() {
    return (
        <section className="works section" id="works">
            <span className="section-subtitle">Mi portafolio</span>
            <h2 className="section-title">Trabajos recientes</h2>

            <div className="works__container bd-grid">
                {
                    worksData.map( ( data ) => {
                        return <WorksContent ruoteImg={ data.routeImg } link={ data.link } alt={ data.alt } title={ data.title } />
                    })
                }
            </div>
        </section>
    )
}

export { Works };
