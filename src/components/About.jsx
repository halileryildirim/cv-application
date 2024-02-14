function About(props) {

    return (
        <div className="about">
            <h1>{props.firstName} {props.lastName}</h1>

            <div className="contact">
                <p>{props.email}</p>
                <p>{props.phone}</p>
            </div>
        </div>
    )

}

export default About