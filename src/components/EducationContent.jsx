function EducationContent({fecha, university, race, speciality}) {
    return (
        <div className="education__content">
            <div>
                <h3 className="education__year">{ fecha }</h3>
                <span className="education__university">{ university }</span>
            </div>

            <div className="education__time">
                <span className="education__rounder"></span>
                <span className="education__line"></span>
            </div>

            <div>
                <h3 className="education__race">{ race }</h3>
                <span className="education__specialty">{ speciality }</span>
            </div>
        </div>
    )
}

export { EducationContent }
