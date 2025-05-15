import React from 'react'
import '../styles/Header.css'
import html2pdf from 'html2pdf.js';
import { FaMagic } from 'react-icons/fa';
import { enhanceWithGemini } from '../utils/enhancer';

const Header = ({formData, setFormData}) => {
  
  const handleDownload = () => {
    const resume = document.querySelector('.preview-container');
    if (!resume) {
      console.error("Resume element not found!");
      return;
    }

    const opt = {
      margin:       [0, 0.5, 0, 0.5], 
      filename:     'Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(resume).save();
  };

  // const handleEnhance = async () => {
  //   const sections = document.querySelectorAll('[data-enhance-type]')

  //   for (let section of sections) {
  //     const type = section.getAttribute('data-enhance-type');
  //     const originalText = section.value || section.innerText;
  //     if (originalText.trim().length === 0) continue;

  //     try {
  //       section.disabled = true;
  //       section.style.opacity = 0.6;
  //       const enhancedText = await enhanceWithGemini(originalText, type)
  //       if (section.tagName === 'TEXTAREA') {
  //         section.value = enhancedText;
  //       } else {
  //         section.innerText = enhancedText;
  //       }
  //     } catch (error) {
  //       console.error('Enhancement with Gemini: ', error)
  //     } finally {
  //       section.disabled = false;
  //       section.style.opacity = 1;
  //     }
  //   }
  // };

  const handleEnhance = async () => {
    const newFormData = { ...formData };

    // Enhance basic fields
    for (const section of ['name', 'headline', 'summary']) {
      if (formData[section]) {
        const enhancedText = await enhanceWithGemini(formData[section], section);
        newFormData[section] = enhancedText;
      }
    }

    // Enhance experiences
    newFormData.experiences = await Promise.all(
      formData.experiences.map(async (exp) => ({
        ...exp,
        description: await enhanceWithGemini(exp.description, 'experience'),
      }))
    );

    // Enhance projects
    newFormData.projects = await Promise.all(
      formData.projects.map(async (proj) => ({
        ...proj,
        projectDescription: await enhanceWithGemini(proj.projectDescription, 'project'),
      }))
    );

    // 🧠 Generate skills from enhanced descriptions
    const combinedDescriptions = [
      ...newFormData.experiences.map(e => e.description),
      ...newFormData.projects.map(p => p.projectDescription),
    ].join('\n');

    const skillsPrompt = `Extract a concise, comma-separated list of relevant technical and soft skills from the following descriptions:\n\n${combinedDescriptions}`;

    const generatedSkills = await enhanceWithGemini(skillsPrompt, 'skills');
    newFormData.skills = generatedSkills;

    setFormData(newFormData);
  };


  return (
    <div className="header-container">
      <h1>Resume Builder</h1>
      <div className="buttons">
        <button type='button' className='enhance-button' onClick={handleEnhance}>
          <FaMagic /> Enhance with AI
        </button>
        <button type='button' className="download-button" onClick={handleDownload}>
          Download
        </button>
      </div>
      
    </div>
  );
};

export default Header;