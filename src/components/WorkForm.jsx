import React, { useState } from 'react';

function WorkForm( {onSubmit} ) {
    const [submitted, setSubmission] = useState(false);
    const [workInfo, editWorkInfo] = useState({
        company: '',
        role: '',
        startDate: '',
        endDate: '',
        ongoing: false,
        aboutWork: '',
    })

    const handleEdit = () => { setSubmission(false); }

    function handleInfo(event) {
        const { name, value, type, checked } = event.target;
        if (type === 'checkbox') {
            editWorkInfo((prevInfo) => ({
                ...prevInfo,
                [name]: checked
            }))
        }
        else {
            editWorkInfo((prevInfo) => ({
                ...prevInfo,
                [name]: value
            }))
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmission(true);
        onSubmit((prevWorks) => [...prevWorks, workInfo]);
    }

    return (
        <div className="education-form">
            <h2>ADD WORK EXPERIENCE</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="company"
                    placeholder="Name of Company"
                    value={workInfo.company}
                    onChange={handleInfo}
                    disabled={submitted}
                    required
                />
                <input
                    type="text"
                    name="role"
                    placeholder="Position"
                    value={workInfo.role}
                    onChange={handleInfo}
                    disabled={submitted}
                    required
                />
                <input
                    type="month"
                    name="startDate"
                    value={workInfo.startDate}
                    onChange={handleInfo}
                    disabled={submitted}
                    required
                />
                <input
                    type="month"
                    name="endDate"
                    value={workInfo.endDate}
                    onChange={handleInfo}
                    disabled={workInfo.ongoing || submitted}
                    required
                />
                <label>Ongoing</label>
                <input
                    name="ongoing"
                    type="checkbox"
                    onClick={handleInfo}
                    disabled={submitted}
                />
                <textarea
                    name="aboutWork"
                    placeholder="About Your Position"
                    value={workInfo.aboutWork}
                    onChange={handleInfo}
                    disabled={submitted}
                />
                <button type="submit" disabled={submitted}>Add Work Experience</button>
            </form>
                <button onClick={handleEdit}>Edit</button>
        </div>
    )
}

export default WorkForm;