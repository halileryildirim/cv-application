import React, { useState } from "react";
import About from "./About";
import AboutForm from "./AboutForm";
import Education from "./Education";
import EducationForm from "./EducationForm";
import Work from "./Work";
import WorkForm from "./WorkForm";
import Skills from "./Skills";
import SkillsForm from "./SkillsForm";

function DOM() {
    const [aboutData, setAboutData] = useState(null);
    const [educationData, setEducationData] = useState(null);
    const [workData, setWorkData] = useState(null);
    const [skills, setSkills] = useState([]);

    function handleAboutSubmit(formData) {
        setAboutData(formData);
    }

    function handleEducationSubmit(formData) {
        setEducationData(formData);
    }

    function handleWorkSubmit(formData) {
        setWorkData(formData);
    }

    function handleSkillData(newSkills) {
        setSkills(newSkills);
    }
    
    return (
        <>
            <div className="about-form-section">
                <AboutForm onSubmit={handleAboutSubmit} />
            </div>
            <div className="education-form-section">
                <EducationForm onSubmit={handleEducationSubmit} />
            </div>
            <div className="work-form-section">
                <WorkForm onSubmit={handleWorkSubmit} />
            </div>
            <div className="skills-section">
                <SkillsForm onSubmit={handleSkillData} />
            </div>

            <div className="cv-page">
                <About submittedData={aboutData} />
                <h2>Education</h2>
                <Education submittedData={educationData} />
                <h2>Work Experience</h2>
                <Work submittedData={workData} />
                <h2>Skills</h2>
                <Skills skills={skills} />
            </div>
        </>        
    )
}

export default DOM;