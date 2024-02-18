function Work( {submittedData} ) {
    return (
        <div className="work">
            {submittedData && (
                <>
                    <h3>{submittedData.role} at {submittedData.company}</h3>
                    <p>{submittedData.startDate} - {submittedData.ongoing ? "Ongoing" : submittedData.endDate} </p>
                    <p>{submittedData.aboutWork}</p>
                </>
            )}
        </div>

    )
}

export default Work;