import React, { useState } from "react";
import About from "./About";
import AboutForm from "./AboutForm";
import Education from "./Education";
import EducationForm from "./EducationForm";
import Work from "./Work";
import WorkForm from "./WorkForm";
import "../styles/DOM.css";

function DOM() {
    const [aboutData, setAboutData] = useState(null);
    const [educationData, setEducationData] = useState([]);
    const [workData, setWorkData] = useState([]);

    function handleAboutSubmit(about) {
        setAboutData(about);
    }

    function handleEducationSubmit(educations) {
        setEducationData(educations);
    }

    function handleWorkSubmit(experiences) {
        setWorkData(experiences);
    }

    return (
        <div className="container">
            <div className="form-section">
                <div className="about-form-section">
                    <AboutForm onSubmit={handleAboutSubmit} />
                </div>
                <div className="education-form-section">
                    <EducationForm onSubmit={handleEducationSubmit} />
                </div>
                <div className="work-form-section">
                    <WorkForm onSubmit={handleWorkSubmit} />
                </div>
            </div>
            <div className="cv-page">
                <About submittedData={aboutData} />
                <h2>Education</h2>
                <Education submittedData={educationData} />
                <h2>Work Experience</h2>
                <Work submittedData={workData} />
            </div>
        </div>        
    )
}

export default DOM;

{/* 
Formların daha iyi görünmesi için state introda kullanılan tıklayınca show disabled sistemi kullan.
Form componentlarındaki başlık kısmını burda divlere taşı, bu divlere onclick özelliği ver.
Bu divlerdeki onclick özellikleri ile state güncellemesini yap. Tüm formlar açıkta çirkin oluyor.
*/}

