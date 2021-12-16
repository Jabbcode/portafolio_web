import { useState } from 'react'

function Contact() {

    const [form, setForm] = useState({
        name: '',
        mail: '',
        project: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setForm({
            name: '',
            mail: '',
            project: '',
            message: '',
        });
        
        // console.log(form);
    }

    return (
        <section className="contact section" id="contact">
            <span className="section-subtitle">Contáctame</span>
            <h2 className="section-title">Ponte en contacto</h2>

            <div className="contact__container bd-grid-form">
                <form onSubmit={handleSubmit} className="contact__form">
                    <div className="contact__inputs">
                        <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Nombre" className="contact__input"/>
                        <input type="mail" name="mail" value={form.mail} onChange={handleChange} placeholder="Correo Electrónico" className="contact__input"/>
                    </div>
                    
                    <input type="text" name="project" value={form.project} onChange={handleChange} placeholder="Proyecto" className="contact__input"/>

                    <textarea name="message" value={form.message} onChange={handleChange} cols="0" rows="10" placeholder="Mensaje" className="contact__input"></textarea>

                    <button type="submit" className="button contact__button">Envie un mensaje</button>
                </form>

                {/* <div>
                    <div className="contact__info">
                        <h3 className="contact__subtitle">Call me</h3>
                        <span className="contact__text">+58 424 953 74 95</span>
                        <span className="contact__text">+58 424 953 74 95</span>
                    </div>

                    <div className="contact__info">
                        <h3 className="contact__subtitle">Email</h3>
                        <span className="contact__text">jabbcodeoficial@gmail.com</span>
                        <span className="contact__text">jabbsontouch@gmail.com</span>
                    </div>

                    <div className="contact__info">
                        <h3 className="contact__subtitle">Location</h3>
                        <span className="contact__text">Venezuela</span>
                        <span className="contact__text">Venezuela</span>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export { Contact }
