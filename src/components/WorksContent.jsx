function WorksContent({ ruoteImg, link, alt, title }) {
    return (
        <div className="works__img">
            <img src={ ruoteImg } alt={ alt } />

            <div className="works__data">
                <a href={ link } className="works__link"><i className="bx bx-link-alt"></i></a>
                <span className="works__title">{ title } </span>
            </div>
        </div>
    )
}

export { WorksContent };
