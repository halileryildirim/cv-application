import React, { useState } from "react";
import About from "./About";
import AboutForm from "./AboutForm";

function DOM() {
    const [aboutData, setAboutData] = useState(null);

    function handleFormSubmit(formData) {
        setAboutData(formData);
    }
    
    return (
        <>
            <div className="about-form-section">
                <AboutForm onSubmit={handleFormSubmit} />
            </div>

            <div className="cv-page">
                <About submittedData={aboutData}/>
            </div>
        </>        
    )
}

export default DOM;