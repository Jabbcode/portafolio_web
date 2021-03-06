import { ServicesContent } from '../components/ServicesContent';

const servicesData = [
    {
        'icon': 'bx bx-code',
        'title': 'Web Design',
        'description': 'Diseño y desarrollo de páginas web responsives para todo tipo de dispositivos, mi meta es suplir y poder obtener el mejor resultado que se adapte a tus necesidades.'
    },
    /* {
        'icon': 'bx bx-pen',
        'title': 'Graphic Design',
        'description': 'This service that I offer is of high quality, and above all experience that I have in the labor field for many years'
    }, */
    {
        'icon': 'bx bx-brush',
        'title': 'UI/UX',
        'description': 'Las mejores estructuras y limpias interfaces para lo que requiera, al mismo tiempo una experiencia de usuario que se ajuste a tu proyecto.'
    },
    {
        'icon': 'bx bx-server',
        'title': 'Backend Development',
        'description': '¿Necesitas desarrollar o administrar servidores? Tengo amplia experiencia en el campo. Si necesitas comenzar de cero o si ya tienes un proyecto avanzado.'
    },
    /* {
        'icon': 'bx bx-pencil',
        'title': 'Content Writing',
        'description': 'This service that I offer is of high quality, and above all experience that I have in the labor field for many years'
    }, */
    {
        'icon': 'bx bx-mobile',
        'title': 'Interface Movil',
        'description': 'Si lo que necesitas no esta enfocado en el diseño web, si no, en dispositivos moviles, entonces soy la persona adecuada para ti; hermosas interfaces y desarrollo móvil te puedo ofrecer.'
    },
]

function Services() {
    return (
        <section className="services section" id="services">
            <span className="section-subtitle">¿Qué ofrezco?</span>
            <h2 className="section-title">Mis Servicios</h2>

            <div className="services__container bd-grid">

                {
                    servicesData.map( ( data ) => {
                        return  <ServicesContent key={data.icon} icon={ data.icon } title={ data.title } description={ data.description } />
                    })   
                }

            </div>
        </section>
    )
}

export { Services };
