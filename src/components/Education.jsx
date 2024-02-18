import '../styles/Education.css'
function Education({ submittedData }) {
    return (
        <div  className="education">
            {submittedData && (
                <>
                    <h3>{submittedData.school}</h3>
                    <p>{submittedData.degree}</p>
                    <p>{submittedData.startDate} - {submittedData.ongoing ? "Ongoing" : submittedData.endDate}</p>
                    <p>{submittedData.aboutEducation}</p>
                </>
            )}
        </div>
    )
}

export default Education;