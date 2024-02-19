import '../styles/Work.css'

function Work({ submittedData }) {
    return (
        <div className="work">
            {submittedData && (
                <>
                    <h2>Work Experience</h2>
                    <h3>{submittedData.company}</h3>
                    <h4>{submittedData.role}</h4>
                    <p>{submittedData.startDate} - {submittedData.ongoing ? "Ongoing" : submittedData.endDate} </p>
                    <p>{submittedData.aboutWork}</p>
                </>
            )}
        </div>

    )
}

export default Work;