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
    const [educationData, setEducationData] = useState(null);
    const [workData, setWorkData] = useState(null); 
    const [aboutHidden, setAboutHidden] = useState(false);
    const [educatioHidden, setEducatioHidden] = useState(true);
    const [workHidden, setWorkHidden] = useState(true);


    function handleAboutSubmit(about) {
        setAboutData(about);
    }

    function handleEducationSubmit(educations) {
        setEducationData(educations);
    }

    function handleWorkSubmit(experiences) {
        setWorkData(experiences);
    }

    function handleAboutHidden() {
        setAboutHidden(!aboutHidden);
        setEducatioHidden(true);
        setWorkHidden(true);
    }

    function handleEducationHidden() {
        setAboutHidden(true);
        setEducatioHidden(!educatioHidden);
        setWorkHidden(true);
    }

    function handleWorkHidden() {
        setAboutHidden(true);
        setEducatioHidden(true);
        setWorkHidden(!workHidden);
    }

    return (
        <div className="container">
            <div className="form-section" >
                <h2 id="about-button" onClick={handleAboutHidden}>Personal Info</h2>
                <div className="about-form-section" hidden={aboutHidden}>
                    <AboutForm onSubmit={handleAboutSubmit} />
                </div>

                <h2 id="education-button" onClick={handleEducationHidden}>Education</h2>
                <div className="education-form-section" hidden={educatioHidden}>
                    <EducationForm onSubmit={handleEducationSubmit} />
                </div>

                <h2 id="work-button" onClick={handleWorkHidden}>Work Experience</h2>
                <div className="work-form-section" hidden={workHidden}>
                    <WorkForm onSubmit={handleWorkSubmit} />
                </div>
            </div>
            <div className="cv-page">
                <div id="about-placeholder"><About submittedData={aboutData} /></div>
                <div id="education-placeholder"><Education submittedData={educationData} /></div>
                <div id="work-placeholder"><Work submittedData={workData} /></div>
            </div>
        </div>        
    )
}

export default DOM;

