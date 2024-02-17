import React, { useState } from 'react'

function SkillsForm({ onSubmit }) {
    const [skill, editSkill] = useState('');
    
    function handleSkill(e) {
        editSkill(e.target.value);
    }
     

    function handleSubmit(e) {
        e.preventDefault();
        onSubmit((prevSkills) => [...prevSkills, skill]);
        editSkill('');
    }

    return (
        <div>
            <h2>ADD SKILLS</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    value={skill}
                    onChange={handleSkill}
                    
                />
                <button
                    type='submit'
                >Add Skill</button>
            </form>

        </div>
    )
}

export default SkillsForm