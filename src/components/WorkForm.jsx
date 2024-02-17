import React, { useState } from 'react';

function WorkForm( {onSubmit} ) {
    const [company, editCompany] = useState('');
    const [role, editRole] = useState('');
    const [startDate, editStartDate] = useState('');
    const [endDate, editEndDate] = useState('');
    const [ongoing, editOngoing] = useState(false);
    const [aboutWork, editAbout] = useState('');
    const [submitted, setSubmission] = useState(false);

    const handleCompany = (e) => { editCompany(e.target.value); };
    const handleRole = (e) => { editRole(e.target.value); };
    const handleStartDate = (e) => { editStartDate(e.target.value); };
    const handleEndDate = (e) => { editEndDate(e.target.value); };
    const handleOngoing = (e) => { editOngoing(!ongoing); };
    const handleAbouts = (e) => { editAbout(e.target.value); }
    const handleEdit = () => {setSubmission(false);}

    function handleSubmit(e) {
        e.preventDefault();
        const workData = {
            company,
            role,
            startDate,
            endDate,
            ongoing,
            aboutWork,
        }
        setSubmission(true);
        onSubmit(workData);
    }

    return (
        <div className="education-form">
            <h2>ADD WORK EXPERIENCE</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="company"
                    placeholder="Name of Company"
                    value={company}
                    onChange={handleCompany}
                    disabled={submitted}
                    required
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Role"
                    value={role}
                    onChange={handleRole}
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
                    placeholder="About Your Role at Company"
                    value={aboutWork}
                    onChange={handleAbouts}
                    disabled={submitted}
                />
                <button type="submit" disabled={submitted}>Add Work Experience</button>
            </form>
                <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default WorkForm;