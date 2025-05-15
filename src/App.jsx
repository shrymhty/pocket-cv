import React from 'react'
import './App.css'
import Header from './components/Header'
import { ResumeBuilder } from './components/ResumeBuilder'
import { useState } from 'react'


const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userEmail: '',
    userLinkedin: '',
    phoneNumber: '',
    collegeName: '',
    degreeName: '',
    streamName: '',
    collegeStart: '',
    collegeEnd: '',
    experiences: [],
    projects: [],
    certificates: [],
    skills: ''
  });

  return (
    <div className="app">
      <Header formData={formData} setFormData={setFormData} />  
      <ResumeBuilder formData={formData} setFormData={setFormData} />
    </div>
  )
}

export default App