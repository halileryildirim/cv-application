function About( {submittedData} ) {

    return (
        <div className="about">
            { submittedData && (
                <>
                    <h1>{submittedData.firstName} {submittedData.lastName}</h1>

                    <div className="contact">
                        <p>{submittedData.email}</p>
                        <p>{submittedData.phone}</p>
                    </div>     
                </>
            )}
        </div>
    )

}

export default About;