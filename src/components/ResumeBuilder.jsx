import React from 'react'
import '../styles/ResumeBuilder.css'
// import { useState } from 'react'
import Form from './Form'
import Preview from './Preview'

export const ResumeBuilder = ({formData, setFormData}) => {
    // const [formData, setFormData] = useState({
    //     firstName: '',
    //     lastName: '',
    //     userEmail: '',
    //     userLinkedin: '',
    //     phoneNumber: '',
    //     collegeName: '',
    //     degreeName:'',
    //     streamName: '',
    //     collegeStart: '',
    //     collegeEnd: '',
    //     experiences: [],
    //     projects: [],
    //     certificates: [],
    //     skills: ''
    // })

    return (
        <div className="resume-body">
            <div className="form-scrollable">
                <Form formData={formData} setFormData={setFormData} />
            </div>
            <div className="preview-scrollable">
                <Preview formData={formData} />
            </div>
        </div>
    )
}
