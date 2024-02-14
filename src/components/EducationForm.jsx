import React, { useState } from "react";


function EducationForm( {onSubmit}) {
    const [school, setSchool] = useState('');
    const [degree, setDegree] = useState('');
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [ongoing, setOngoing] = useState(false);
    const [aboutEducation, setAboutEducation] = useState('');
    const [submitted, setSubmission] = useState(false);

    const handleSchool = (e) => { setSchool(e.target.value); }
    const handleDegree = (e) => { setDegree(e.target.value); }
    const handleStartDate = (e) => { setStartDate(e.target.value); }
    const handleEndDate = (e) => { setEndDate(e.target.value); }
    const handleOngoing = () => { setOngoing(!ongoing); }
    const handleAbouts = (e) => { setAboutEducation(e.target.value); }

    function handleSubmit(e) {
        e.preventDefault();

        const educationData = {
            school,
            degree,
            startDate,
            endDate,
            ongoing,
            aboutEducation,
        }

        setSubmission(true);
        onSubmit(educationData);
    }

    const handleEdit = () => {setSubmission(false);}

    return (
        <div className="education-form">
            <h2>Add Education</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="school"
                    placeholder="Name of University"
                    value={school}
                    onChange={handleSchool}
                    disabled={submitted}
                    required
                />
                <input
                    type="text"
                    name="degree"
                    placeholder="Degree"
                    value={degree}
                    onChange={handleDegree}
                    disabled={submitted}
                    required
                />
                <input
                    type="date"
                    name="startdate"
                    value={startDate}
                    onChange={handleStartDate}
                    disabled={submitted}
                    required
                />
                <input
                    type="date"
                    name="enddate"
                    value={endDate}
                    onChange={handleEndDate}
                    disabled={ongoing || submitted}
                    required
                />
                <label>Ongoing</label>
                <input
                    name="ongoing"
                    type="checkbox"
                    onClick={handleOngoing}
                    disabled={submitted}
                />
                <textarea
                    name="aboutedu"
                    placeholder="About Education"
                    value={aboutEducation}
                    onChange={handleAbouts}
                    disabled={submitted}
                />
                <button type="submit" disabled={submitted}>Add Education</button>
            </form>
                <button onClick={handleEdit}>Edit</button>
        </div>
    )
}
{/* Eğitimleri submit ederken bir array ile gönder, display componentta bu eğitimleri mapleyerek renderla.*/}
export default EducationForm;