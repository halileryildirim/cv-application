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
            <form onSubmit={handleSubmit}>
                <label>Add Skill</label>
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