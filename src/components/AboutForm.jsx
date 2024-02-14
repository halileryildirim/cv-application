import React, { useState } from "react";

function AboutForm({ onSubmit }) {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [summary, setSummary] = useState('');
    const [submitted, setSubmission] = useState(false);

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }
    
    function handleLastName(e) {
        setLastName(e.target.value);
    }

    function handlePhone(e) {
        setPhone(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function handleSummary(e) {
        setSummary(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            firstName,
            lastName,
            phone,
            email,
            summary,
        };

        setSubmission(true);
        onSubmit(formData);
    }

    const handleEdit = () => {
        setSubmission(false);
    }

    return (
        <div className="about-form">
            <h2>Personal Info</h2>
            <form onSubmit={handleSubmit}>
                <input
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstName}
                    disabled={submitted}
                    required
                />
                <input
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastName}
                    disabled={submitted}
                    required
                />
                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhone}
                    disabled={submitted}
                    required
                />
                <input
                    name="mail"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    disabled={submitted}
                    required
                />
                <textarea
                    name="summary"
                    placeholder="About me"
                    value={summary}
                    onChange={handleSummary}
                    disabled={submitted}
                />
                <button type="submit" disabled={submitted}>Save</button>
            </form>
                <button onClick={handleEdit}>Edit</button>
                
        </div>
    )
}

export default AboutForm;