import '../styles/Preview.css';

const Preview = ({ formData }) => {
  const getLinkedinUser = (url) => {
    if (!url) return '';
    const parts = url.split('/').filter(Boolean);
    return `linkedin.com/${parts.pop()}`;
  }

  const formatMultilineText = (text) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const hasContactInfo = formData.phoneNumber || formData.userEmail || formData.userLinkedin;
  const hasEducationDetails = formData.collegeName || formData.streamName || formData.collegeStart || formData.collegeEnd || formData.degreeName;
  const hasExperienceDetails = formData.experiences && formData.experiences.length > 0;
  const hasProjectDetails = formData.projects && formData.projects.length > 0;
  const hasCertDetails = formData.certificates && formData.certificates.length > 0;
  const hasSkills = formData.skills && formData.skills.trim() !== '';

  return (
    <div className="preview-container">
      <div className="resume-content">
        {/* Header Section */}
        <div className="resume-header">
          <h1>{formData.firstName} {formData.lastName}</h1>
          {hasContactInfo && (
            <div className="contact-info">
              {formData.phoneNumber && <span>{formData.phoneNumber}</span>}
              {formData.phoneNumber && (formData.userEmail || formData.userLinkedin) && <span className="separator"> | </span>}
              
              {formData.userEmail && <span>{formData.userEmail}</span>}
              {formData.userEmail && formData.userLinkedin && <span className="separator"> | </span>}
              
              {formData.userLinkedin && (
                <a href={formData.userLinkedin} target="_blank" rel="noreferrer">
                  {getLinkedinUser(formData.userLinkedin)}
                </a>
              )}
            </div>
          )}
        </div>

        {/* Skills Section */}
        {hasSkills && (
          <div className="resume-section">
            <h2 id='title'>Skills</h2>
            <p>{formatMultilineText(formData.skills)}</p>
          </div>
        )}
        
        {/* Education Section */}
        {hasEducationDetails && (
          <div className="resume-section">
            <h2 id='title'>Education</h2>
            <div className="education">
              {formData.collegeName && <h2>{formData.collegeName}</h2>}
              <div className="degree-info-date">
                {(formData.degreeName || formData.streamName) && (
                  <p className="degree-info">
                    {formData.degreeName && `${formData.degreeName}`}
                    {formData.degreeName && formData.streamName && ' in '}
                    {formData.streamName && `${formData.streamName}`}
                  </p>
                )}
                {(formData.collegeStart || formData.collegeEnd) && (
                  <p className="date-range">
                    {formData.collegeStart}{formData.collegeStart && formData.collegeEnd && ' - '}{formData.collegeEnd}
                  </p>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Experience Section */}
        {hasExperienceDetails && (
          <div className="resume-section">
            <h2 id='title'>Experience</h2>
            {formData.experiences.map((exp, index) => (
              <div key={index} className="experience">
                <div className="job-header">
                  <h2>{exp.role}</h2>
                  <p className="date-range">
                    {exp.startDate && exp.startDate.substring(0, 7).replace('-', '/')} - {exp.isCurrent ? 'Present' : (exp.endDate && exp.endDate.substring(0, 7).replace('-', '/'))}
                  </p>
                </div>
                <p className="company-name">{exp.company}</p>
                <p className="job-description">{formatMultilineText(exp.description)}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Projects Section */}
        {hasProjectDetails && (
          <div className="resume-section">
            <h2 id='title'>Projects</h2>
            {formData.projects.map((proj, index) => (
              <div key={index} className="project">
                <div className="project-header">
                  <h2>{proj.projectName}</h2>
                  <p className="date-range">
                    {proj.projectDate}
                  </p>
                </div>
                <p className="project-description">{formatMultilineText(proj.projectDescription)}</p>
              </div>
            ))}
          </div>
        )}
        
        {/* Certifications Section */}
        {hasCertDetails && (
          <div className="resume-section">
            <h2 id='title'>Certifications</h2>
            {formData.certificates.map((cert, index) => (
              <div key={index} className="certificate">
                <h2>{cert.certName}</h2>
                <p>{formatMultilineText(cert.certDescription)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;