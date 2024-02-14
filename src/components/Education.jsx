function Education( {submittedData} ) {
    return (
        <div className="education">
            <h2>Education</h2>
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