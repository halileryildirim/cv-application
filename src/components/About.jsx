function About({ submittedData }) {
    
    const iconStyle = {
        width: '24px',
        heigth: '24px',
    }

    return (
        <div className="about">
            { submittedData && (
                <>
                    <h1>{submittedData.firstName} {submittedData.lastName}</h1>

                    <div className="contact">
                        <p><img style={iconStyle} src="src/assets/mail.svg" /> {submittedData.email}</p>
                        <p><img style={iconStyle} src="src/assets/phone.svg"/> {submittedData.phone}</p>
                        <h2>About Me</h2>
                        <p>{submittedData.summary}</p>
                    </div>     
                </>
            )}
        </div>
    )

}

export default About;

