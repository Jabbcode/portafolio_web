import React from 'react'

function Contact() {
    return (
        <section className="contact section" id="contact">
            <span className="section-subtitle">Contacta me</span>
            <h2 className="section-title">Ponte en contacto</h2>

            <div className="contact__container bd-grid-form">
                <form action="" className="contact__form">
                    <div className="contact__inputs">
                        <input type="text" placeholder="Nombre" className="contact__input"/>
                        <input type="mail" placeholder="Correo Electronico" className="contact__input"/>
                    </div>
                    
                    <input type="text" placeholder="Proyecto" className="contact__input"/>

                    <textarea name="" id="" cols="0" rows="10" placeholder="Mensaje" className="contact__input"></textarea>

                    <input type="submit" value="Envieme un mensaje" className="button contact__button" />
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
