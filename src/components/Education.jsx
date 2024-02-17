function Education( {submittedData} ) {
    return (
        <>
        {submittedData.length > 0 && submittedData.map((education, index) => {
                    return (
                    <div key={index} className="education">
                        <h3>{education.school}</h3>
                        <p>{education.degree}</p>
                        <p>{education.startDate} - {education.ongoing ? "Ongoing" : education.endDate}</p>
                        <p>{education.aboutEducation}</p>
                    </div>
                    )
                })}
        </>
    )
}

export default Education;