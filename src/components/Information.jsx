function Information({ icon, body }) {
    return (
        <div className="about__information-data">
            <i className={` ${ icon } about__information-icon`}></i>
            <span className="">{ body }</span>
        </div>
    )
}

export { Information };
