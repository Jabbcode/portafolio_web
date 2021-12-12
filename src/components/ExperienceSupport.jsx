function ExperienceSupport( { icon, subtitle, small } ) {
    return (
        <div className="about__information-data">                    
            <i className={` ${ icon } about__information-icon`}></i>             
            <div className="about__information-subtitle">
                <span className="about__information-subtitle"> { subtitle } </span>
                <span className="about__information-subtitle-small"> { small } </span>
            </div>   
        </div>
    )
}

export { ExperienceSupport }
