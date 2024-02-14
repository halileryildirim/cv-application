import React, { useState } from "react";
import About from "./About";
import AboutForm from "./AboutForm";

function DOM() {
    const [submittedData, setSubmittedData] = useState(null);

    function handleFormSubmit(formData) {
        setSubmittedData(formData);
    }
    
    return (
        <>
            <div className="about-form-section">
                <AboutForm onSubmit={handleFormSubmit} />
                <About submittedData={submittedData}/>
            </div>
        </>

        
    )
}

export default DOM;