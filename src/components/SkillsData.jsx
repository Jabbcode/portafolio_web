
function SkillsData({ name, number, porcentaje }) {
    
    const progressBar = {
        width: porcentaje 
    }; 
    
    return (
        <div className="skills__data">
            <span className="skills__name">{ name }</span>
            <span className="skills__number">{ number }</span>
            <span className="skills__bar" style={ progressBar }></span>
        </div>
    )
}

export { SkillsData };
