import '../styles/About.css'
import assets from './Icons';

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
                        <div className='contact-details'>
                            <p><img style={iconStyle} src={assets.mailIcon} /> {submittedData.email}</p>
                            <p><img style={iconStyle} src={assets.phoneIcon} /> {submittedData.phone}</p>
                        </div>
                        <div className='about-details'>
                            <h3>About Me</h3>
                            <p>{submittedData.summary}</p>
                        </div>
                    </div>     
                </>
            )}
        </div>
    )

}

export default About;

