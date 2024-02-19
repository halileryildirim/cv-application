import React, { useState } from "react";
import '../styles/EducationForm.css'

function EducationForm( {onSubmit}) {
    const [submitted, setSubmission] = useState(false);
    const [educationInfo, editEducationInfo] = useState({
        school: '',
        degree: '',
        startDate: '',
        endDate: '',
        ongoing: false,
        aboutEducation: '',
    });

    const handleFormEdit = () => { setSubmission(false); }
    
    function handleInfo(event) {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            editEducationInfo((prevInfo) => ({
                ...prevInfo,
                [name]: checked,
            }))
        }
        else {
            editEducationInfo((prevInfo) => ({
                ...prevInfo,
                [name]: value,
            }))
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmission(true);
        onSubmit(educationInfo);
    }
    
    return (
        <div className="education-form">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <input
                        type="text"
                        name="school"
                        placeholder="Name of University"
                        value={educationInfo.school}
                        onChange={handleInfo}
                        disabled={submitted}
                        required
                    />
                    <input
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={educationInfo.degree}
                        onChange={handleInfo}
                        disabled={submitted}
                        required
                    />
                </div>
                <div className="form-row" id="date-row">
                    <label>Start Date</label>
                    <input
                        type="month"
                        name="startDate"
                        value={educationInfo.startDate}
                        onChange={handleInfo}
                        disabled={submitted}
                        required
                    />
                    <label>End Date</label>
                    <input
                        type="month"
                        name="endDate"
                        value={educationInfo.endDate}
                        onChange={handleInfo}
                        disabled={educationInfo.ongoing || submitted}
                        required
                    />
                    <label>Ongoing</label>
                    <input
                        name="ongoing"
                        type="checkbox"
                        onClick={handleInfo}
                        disabled={submitted}
                    />
                </div>
                <textarea
                    name="aboutEducation"
                    placeholder="About"
                    value={educationInfo.aboutEducation}
                    onChange={handleInfo}
                    required
                    disabled={submitted}
                    maxLength={300}
                />
                <div className="button-row">
                    <button type="submit" disabled={submitted}>Save</button>
                    <button onClick={handleFormEdit} type="button">Edit</button>
                </div>
            </form>
                
        </div>
    )
}

export default EducationForm;