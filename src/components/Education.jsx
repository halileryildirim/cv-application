import '../styles/Education.css'
function Education({ submittedData }) {
    return (
        <div  className="education">
            {submittedData && (
                <>
                    <h2>Education</h2>
                    <h3>{submittedData.school}</h3>
                    <h4>{submittedData.degree}</h4>
                    <p>{submittedData.startDate} - {submittedData.ongoing ? "Ongoing" : submittedData.endDate}</p>
                    <p>{submittedData.aboutEducation}</p>
                </>
            )}
        </div>
    )
}

export default Education;