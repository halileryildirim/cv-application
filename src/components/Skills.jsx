function Skills({ skills }) {
    return (
        <>
            {skills.length > 0 && 
                skills.map((skill, index) => {
                return ( <div key={index}> {skill} </div> )
        })
            }
        </>
    )
}

export default Skills;