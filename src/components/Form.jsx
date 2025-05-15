import '../styles/Form.css';

const Form = ({ formData, setFormData }) => {

  const addExperience = () => {
    setFormData(prev => ({
      ...prev,
      experiences: [
        ...prev.experiences,
        {
          company:'',
          role: '',
          startDate: '',
          endDate: '',
          isCurrent: false,
          description: ''
        }
      ]
    }));
  };

  const addProject = () => {
    setFormData(prev => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          projectName: '',
          projectDate: '',
          projectDescription: ''
        }
      ]
    }))
  }

  const addCerificate = () => {
    setFormData(prev => ({
      ...prev,
      certificates: [
        ...prev.certificates,
        {
          certName: '',
          certDescription: ''
        }
      ]
    }));
  };

  const removeExperience = (indexToFilter) => {
    setFormData(prev => ({
      ...prev,
      experiences: prev.experiences.filter((_, index) => index !== indexToFilter)
    }));
  };

  const removeProject = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      projects: prev.projects.filter((_, index) => index !== indexToRemove)
    }))
  }

  const removeCertificate = (indexToRemove) => {
    setFormData(prev => ({
      ...prev,
      certificates: prev.certificates.filter((_, index) => index !== indexToRemove)
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleExpChange = (index, field, value) => {
    const updatedExperiences = [...formData.experiences];
    updatedExperiences[index][field] = value;
    setFormData(prev => ({
      ...prev,
      experiences: updatedExperiences
    }));
  };

  const handleProjChange = (index, field, value) => {
    const updatesProjects = [...formData.projects];
    updatesProjects[index][field] = value;
    setFormData(prev => ({
      ...prev,
      projects: updatesProjects
    }));
  };

  const handleCertChange = (index, field, value) => {
    const updatesCerts = [...formData.certificates];
    updatesCerts[index][field] = value;
    setFormData(prev => ({
      ...prev, 
      certificates: updatesCerts
    }));
  };

  const currentYear = new Date().getFullYear();
  const startYear = 1980;
  const startYears = [];
  const endYears = [];
  for (let year = currentYear; year >= startYear; year--) {
    startYears.push(year);
  }

  for (let year = currentYear; year <= currentYear+10; year++) {
    endYears.push(year);
  }

  return (
    <div className="form-container">
      <form>
        <div className="form-section">
          <div className="section-header">
            <h2>Personal Details</h2>
            <div className="section-divider"></div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="first-name">First Name: </label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder='Enter your first name'
              />
            </div>
            <div className="input-group">
              <label htmlFor="last-name">Last Name: </label>
              <input 
                type='text'
                id='last-name'
                name='lastName'
                value={formData.lastName}
                onChange={handleChange}
                placeholder='Enter your last name'
              />
            </div>
          </div>

          <div className="input-group">
            <label htmlFor="user-phone">Phone Number: </label>
            <input 
              type="tel"
              id='user-phone'
              name='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              placeholder='Enter your phone number'
            />
          </div>

          <div className="input-group">
            <label htmlFor="user-email">Email:</label>
            <input 
              type="email" 
              id='user-email'
              name='userEmail'
              value={formData.userEmail}
              onChange={handleChange}
              placeholder='Enter you email address'
            />
          </div>

          <div className="input-group">
            <label htmlFor="user-linkedin">Linkedin URL: </label>
            <input 
              type="url"
              id='user-linkedin'
              name='userLinkedin'
              value={formData.userLinkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourprofile"
            />
          </div>
        </div>
         
        <div className="form-section">
          <div className="section-header">
            <h2>Skills and Technologies</h2>
            <div className="section-divider"></div>
          </div>
          <div className="input-group">
            <label htmlFor="skills">Skills (separate with commas): </label>
            <textarea
              id="skills"
              name="skills"
              rows={3}
              value={formData.skills}
              onChange={handleChange}
              wrap="soft"
              placeholder="React, JavaScript, HTML, CSS, etc."
            />
          </div>
        </div> 
        
        <div className="form-section">
          <div className="section-header">
            <h2>Education Details</h2>
            <div className="section-divider"></div>
          </div>
          <div className="input-group">
            <label htmlFor="college-name">University Name: </label>
            <input 
              type="text" 
              name="collegeName" 
              id="college-name" 
              value={formData.collegeName} 
              onChange={handleChange} 
              placeholder="Enter your university name"
            />
          </div>
          <div className="input-row">
            <div className="input-group">
              <label htmlFor="degree-name">Degree: </label>
                <input 
                  type="text" 
                  name='degreeName'
                  id='degree-name'
                  value={formData.degreeName}
                  onChange={handleChange}
                  placeholder="Bachelor of Science"
                />
            </div>
            <div className="input-group">
              <label htmlFor="stream-name">Stream: </label>
              <input 
                type="text" 
                name='streamName'
                id='stream-name'
                value={formData.streamName}
                onChange={handleChange}
                placeholder="Computer Science"
              />
            </div>
          </div>
          <div className="input-row dates">
            <div className="input-group">
              <label htmlFor="college-start">Start Year: </label>
              <select 
                id='college-start' 
                name='collegeStart'
                value={formData.collegeStart} 
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                {startYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
            <div className="input-group">
              <label htmlFor="college-end">End Year: </label>
              <select 
                id='college-end' 
                name='collegeEnd'
                value={formData.collegeEnd} 
                onChange={handleChange}
              >
                <option value="">Select Year</option>
                {endYears.map((year) => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="form-section">
          <div className="section-header">
            <h2>Experience Details</h2>
            <div className="section-divider"></div>
          </div>
          <button type='button' onClick={addExperience} id='add-button'>+ Add Experience</button>
          {formData.experiences.map((exp, index) => (
            <div className="experience-entry" key={index}>
              <div className="entry-content">
                <div className="input-group">
                  <label htmlFor="company-name">Company/Organization Name:</label>
                  <input 
                    type="text" 
                    value={exp.company}
                    name='company'
                    id='company-name'
                    onChange={(e) => handleExpChange(index, 'company', e.target.value)}
                    placeholder="Enter your organization name"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="role-name">Position/Role</label>
                  <input 
                    type="text" 
                    value={exp.role}
                    name='role'
                    id='role-name'
                    onChange={(e) => handleExpChange(index, 'role', e.target.value)}
                    placeholder="Enter your role"
                  />
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label htmlFor="start-date">Start Date: </label>
                    <input 
                      type="month" 
                      placeholder='mm/yyyy'
                      id='start-date'
                      name='startDate'
                      value={exp.startDate}
                      onChange={(e) => handleExpChange(index, 'startDate', e.target.value)}
                    />
                  </div>
                  {!exp.isCurrent && (
                    <div className='input-group'>
                      <label htmlFor="end-date">End Date: </label>
                      <input 
                        type="month" 
                        placeholder='mm/yyyy'
                        id='end-date'
                        name='endDate'
                        value={exp.endDate}
                        onChange={(e) => handleExpChange(index, 'endDate', e.target.value)}
                      />
                    </div>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    id={`currently-working-${index}`}
                    checked={exp.isCurrent}
                    onChange={(e) =>
                      handleExpChange(index, 'isCurrent', e.target.checked)
                    }
                  />
                  <label htmlFor={`currently-working-${index}`}>Currently working</label>
                </div>
                <div className="input-group">
                  <label htmlFor="desc-text">Description/Tasks:</label>
                  <textarea 
                    name="description" 
                    id="desc-text"
                    wrap="soft"
                    value={exp.description}
                    data-enhance-type="experience"
                    onChange={(e) => handleExpChange(index, 'description', e.target.value)}
                    placeholder="Describe your responsibilities and achievements"
                  />
                </div>
              </div>
              <button type='button' className='remove-button' onClick={() => removeExperience(index)}>Remove Experience</button>
            </div>
          ))}
        </div>

        <div className="form-section">
          <div className="section-header">
            <h2>Projects Details</h2>
            <div className="section-divider"></div>
          </div>
          <button type='button' onClick={addProject} id='add-button'>+ Add Project</button>
          {formData.projects.map((proj, index) => (
            <div className="certificate-entry" key={index}>
              <div className="entry-content">
                <div className="input-group">
                  <label htmlFor="project-name">Project Title:</label>
                  <input 
                    type="text"
                    value={proj.projectName}
                    name='projectName'
                    id='project-name'
                    onChange={(e) => handleProjChange(index, e.target.name, e.target.value)}
                    placeholder="Enter project name" 
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="project-date">Project Date:</label>
                  <input 
                    type="text"
                    placeholder='mm/yyyy'
                    id='project-date'
                    name='projectDate'
                    value={proj.projectDate}
                    onChange={(e) => handleProjChange(index, e.target.name, e.target.value)} 
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="project-desc">Description:</label>
                  <textarea 
                    name="projectDescription" 
                    id="project-desc" 
                    wrap="soft"
                    value={proj.projectDescription}
                    data-enhance-type="project"
                    onChange={(e) => handleProjChange(index, e.target.name, e.target.value)} 
                    placeholder="Describe your project"
                  />
                </div>
              </div>
              <button type='button' className='remove-button' onClick={() => removeProject(index)}>Delete Project</button>
            </div>
          ))}
        </div>

        <div className="form-section">
          <div className="section-header">
            <h2>Certification Details</h2>
            <div className="section-divider"></div>
          </div>
          <button type='button' onClick={addCerificate} id='add-button'>+ Add Certificate</button>
          {formData.certificates.map((cert, index) => (
            <div className="certificate-entry" key={index}>
              <div className="entry-content">
                <div className="input-group">
                  <label htmlFor="cert-name">Name of the Certificate:</label>
                  <input 
                    type="text" 
                    name='certName'
                    id='cert-name'
                    value={cert.certName}
                    onChange={(e) => handleCertChange(index, e.target.name, e.target.value)}
                    placeholder="Enter certificate name"
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="cert-desc">Description</label>
                  <textarea 
                    name="certDescription" 
                    id="cert-desc"
                    value={cert.certDescription}
                    placeholder='Coursera, Issued May 2024'
                    wrap="soft"
                    onChange={(e) => handleCertChange(index, e.target.name, e.target.value)}
                  />
                </div>
              </div>
              <button type='button' className='remove-button' onClick={() => removeCertificate(index)}>Remove Certificate</button>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Form;
