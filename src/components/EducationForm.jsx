import React, { useState } from "react";


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

    const handleEdit = () => { setSubmission(false); }
    
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
        onSubmit((prevEducations) => [...prevEducations, educationInfo]);

    }
    
    return (
        <div className="education-form">
            <h2>Add Education</h2>
            <form onSubmit={handleSubmit}>
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
                <input
                    type="month"
                    name="startDate"
                    value={educationInfo.startDate}
                    onChange={handleInfo}
                    disabled={submitted}
                    required
                />
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
                <textarea
                    name="aboutEducation"
                    placeholder="About Education"
                    value={educationInfo.aboutEducation}
                    onChange={handleInfo}
                    disabled={submitted}
                />
                <button type="submit" disabled={submitted}>Add Education</button>
            </form>
                <button onClick={handleEdit}>Edit</button>
        </div>
    )
}
{/*
Eğitimleri submit ederken bir array ile gönder, display componentta bu eğitimleri mapleyerek renderla. 
Eğitimleri .map ile renderlarken Reacttaki ID veya key neyse olması gerekeni unutma!!
Eğitimlere ayrıca display kısmında silme butonu eklemek gerekecek. 
O zaman eğitim editleme işi de display'e kalıyor. Nasıl olacak????
*/}
export default EducationForm;