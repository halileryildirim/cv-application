function Work( {submittedData} ) {
    return (
        <>
            {submittedData.length > 0 && submittedData.map((work, index) => {
                return (
                    <div key={index} className="work">
                        <h3>{work.role} at {work.company}</h3>
                        <p>{work.startDate} - {work.ongoing ? "Ongoing" : work.endDate} </p>
                        <p>{work.aboutWork}</p>
                    </div>
                )
            })}
        </>

    )
}

export default Work;