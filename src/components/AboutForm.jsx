import React, { useState } from "react";
import '../styles/AboutForm.css'

function AboutForm({ onSubmit }) {
    const [submitted, setSubmission] = useState(false);
    const [aboutInfo, setAboutInfo] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        summary: '',
    })

function handleInfo(e) {
    const { name, value } = e.target;
    setAboutInfo(prevInfo => ({
        ...prevInfo,
        [name]: value
    }));
}

    const handleSubmit = (e) => {
        e.preventDefault();

        setSubmission(true);
        onSubmit(aboutInfo);
        
    }

    const handleEdit = () => {
        setSubmission(false);
    }
    
    return (
        <div className="about-form">
            <form onSubmit={handleSubmit}>
                <div className="name-section">
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={aboutInfo.firstName}
                        onChange={handleInfo}
                        disabled={submitted}
                        required
                    />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={aboutInfo.lastName}
                        onChange={handleInfo}
                        disabled={submitted}
                        required
                    />
                </div>
                <div className="contact-section">
                    <input
                        name="phone"
                        type="tel"
                        placeholder="Phone Number"
                        value={aboutInfo.phone}
                        onChange={handleInfo}
                        disabled={submitted}
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={aboutInfo.email}
                        onChange={handleInfo}
                        disabled={submitted}
                        required
                    />
                </div>
                <textarea
                    name="summary"
                    placeholder="About"
                    value={aboutInfo.summary}
                    onChange={handleInfo}
                    disabled={submitted}
                    maxLength={300}
                    required
                />
                <div className="button-container">
                    <button id="save-button" type="submit" disabled={submitted}>Save</button>
                    <button id="edit-button" type="button" onClick={handleEdit}>Edit</button>
                </div>
            </form>
                
                
        </div>
    )
}

export default AboutForm;