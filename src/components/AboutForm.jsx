import React, { useState } from "react";

function AboutForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

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

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="about-form">
            <form onSubmit={handleSubmit}>
                <input
                    name="firstname"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={handleFirstName}
                    required
                />
                <input
                    name="lastname"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={handleLastName}
                    required
                />
                <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhone}
                    required
                />
                <input
                    name="mail"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={handleEmail}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AboutForm