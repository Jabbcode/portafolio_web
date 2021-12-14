import { EducationContent } from '../components/EducationContent';

const educationData = [
    {
        'fecha': '2013 - 2020',
        'university': 'Estudios Universitarios', 
        'race': 'Titulo Universitario', 
        'speciality': 'Ingeniero Electronico'  
    },
    {
        'fecha': '2018 - 2021',
        'university': 'Freelancer', 
        'race': 'Frontend y Backend Developer', 
        'speciality': ''  
    }

]

function Education() {
    return (
        <section className="education section">
            <span className="section-subtitle">Calificación</span>
            <h2 className="section-title">Mi Educación</h2>

            <div className="education__container bd-grid">
                
                {
                    educationData.map( ( data ) => {
                        return (
                            <EducationContent 
                                key={data.speciality}
                                fecha={ data.fecha } 
                                university={ data.university } 
                                race={ data.race } 
                                speciality={ data.speciality }     
                            />
                        )
                    })
                }
                
            </div>
        </section>
    )
}

export { Education };
