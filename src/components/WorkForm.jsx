import React, { useState } from 'react';
import '../styles/WorkForm.css'

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

    const handleFormEdit = () => { setSubmission(false); }

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
        onSubmit(workInfo);
    }

    return (
        <div className="work-form">
            <h2>Work Experience</h2>
            <form onSubmit={handleSubmit}>
                <div className='form-row'>
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
                </div>
                <div className='form-row' id='date-row'>
                    <label>Start Date</label>
                    <input
                        type="month"
                        name="startDate"
                        value={workInfo.startDate}
                        onChange={handleInfo}
                        disabled={submitted}
                        required
                    />
                    <label>End Date</label>
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
                </div>
                <textarea
                    name="aboutWork"
                    placeholder="About Your Position"
                    value={workInfo.aboutWork}
                    onChange={handleInfo}
                    required
                    disabled={submitted}
                />
                <div className='button-row'>
                    <button type="submit" disabled={submitted}>Save</button>
                    <button type='button'onClick={handleFormEdit}>Edit</button>
                </div>
            </form>
                
        </div>
    )
}

export default WorkForm;