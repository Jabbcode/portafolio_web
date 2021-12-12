import { ServicesContent } from '../components/ServicesContent';

const servicesData = [
    {
        'icon': 'bx bx-code',
        'title': 'Web Design',
        'description': 'This service that I offer is of high quality, and above all experience that I have in the labor field for many years'
    },
    /* {
        'icon': 'bx bx-pen',
        'title': 'Graphic Design',
        'description': 'This service that I offer is of high quality, and above all experience that I have in the labor field for many years'
    }, */
    {
        'icon': 'bx bx-brush',
        'title': 'UI/UX',
        'description': 'This service that I offer is of high quality, and above all experience that I have in the labor field for many years'
    },
    {
        'icon': 'bx bx-server',
        'title': 'Backend Development',
        'description': 'This service that I offer is of high quality, and above all experience that I have in the labor field for many years'
    },
    /* {
        'icon': 'bx bx-pencil',
        'title': 'Content Writing',
        'description': 'This service that I offer is of high quality, and above all experience that I have in the labor field for many years'
    }, */
    {
        'icon': 'bx bx-mobile',
        'title': 'Interface Movil',
        'description': 'This service that I offer is of high quality, and above all experience that I have in the labor field for many years'
    },
]

function Services() {
    return (
        <section className="services section" id="services">
            <span className="section-subtitle">Que ofrezco</span>
            <h2 className="section-title">Mis Servicios</h2>

            <div className="services__container bd-grid">

                {
                    servicesData.map( ( data ) => {
                        return  <ServicesContent icon={ data.icon } title={ data.title } description={ data.description } />
                    })   
                }

            </div>
        </section>
    )
}

export { Services };
