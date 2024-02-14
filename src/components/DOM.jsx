import React, { useState } from "react";
import About from "./About";
import AboutForm from "./AboutForm";
import Education from "./Education";
import EducationForm from "./EducationForm";

function DOM() {
    const [aboutData, setAboutData] = useState(null);
    const [educationData, setEducationData] = useState(null);

    function handleAboutSubmit(formData) {
        setAboutData(formData);
    }

    function handleEducationSubmit(formData) {
        setEducationData(formData);
    }
    
    return (
        <>
            <div className="about-form-section">
                <AboutForm onSubmit={handleAboutSubmit} />
                <EducationForm onSubmit={handleEducationSubmit}/>
            </div>

            <div className="cv-page">
                <About submittedData={aboutData} />
                <Education submittedData={educationData}></Education>
            </div>
        </>        
    )
}

export default DOM;