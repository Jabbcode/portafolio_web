import { SkillsData } from "../components/SkillsData";

const skillsFrontendData = [
    {
        'name': 'Html/css',
        'number': '90%',
        'porcentaje': '90%'
    },
    {
        'name': 'Javascript',
        'number': '70%',
        'porcentaje': '70%'
    },
    {
        'name': 'React',
        'number': '60%',
        'porcentaje': '60%'
    },
    {
        'name': 'Angular',
        'number': '75%',
        'porcentaje': '75%'
    },
]

const skillsBackendData = [
    {
        'name': 'Php',
        'number': '80%',
        'porcentaje': '80%'
    },
    {
        'name': 'Laravel',
        'number': '75%',
        'porcentaje': '75%'
    },
    {
        'name': 'Node Js',
        'number': '60%',
        'porcentaje': '60%'
    },
    {
        'name': 'Firebase',
        'number': '80%',
        'porcentaje': '80%'
    },
]

function Skills() {
    return (
        <section className="skills section" id="skills">
            <span className="section-subtitle">¿Por qué elegirme?</span>
            <h2 className="section-title">Mis conocimientos</h2>

            <div className="skills__container bd-grid">
                <div className="skills__content">
                    <h3 className="skills__subtitle">Frontend</h3>

                    {
                        skillsFrontendData.map( ( data ) => {
                            return <SkillsData key={data.name} name={ data.name } number={ data.number } porcentaje={ data.porcentaje } />
                        })
                    }
                    
                </div>

                <div className="skills__content">
                    <h3 className="skills__subtitle">Backend</h3>

                    {
                        skillsBackendData.map( ( data ) => {
                            return <SkillsData key={data.name} name={ data.name } number={ data.number } porcentaje={ data.porcentaje } />
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export { Skills };
