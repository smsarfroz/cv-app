import { useState } from 'react'
import './App.css'
import Education from './components/Education';
import Personal from './components/Personal';
import Profile from './components/Profile';

export default function App() {
  

  const [skillCategory, setSkillCategory] = useState('');
  const [skills, setSkills] = useState('');

  const [jobExperienceTitle, setJobExperienceTitle] = useState('');
  const [company, setCompany] = useState('');
  const [startJob, setStartJob] = useState('');
  const [endJob, setEndJob] = useState('');
  const [companyLocation, setCompanyLocation] = useState('');
  const [responsibility, setResponsibility] = useState('');
  return (
    <>
      <div className="inputDetails">
        
        <Personal />
        
        <Profile />

        <Education />

        <div className="skillsDetails">
          <p className="titleOfDetails">Skills</p>

          <p><label htmlFor="">Skill Category</label></p>
          <input type="text" value={skillCategory} onChange={(e) => setSkillCategory(e.target.value)}/>

          <p><label htmlFor="">Skills</label></p>
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>

        <div className="experienceDetails">
          <p className="titleOfDetails">Work Experience</p>
          <h2>{jobExperienceTitle}</h2>

          <p><label htmlFor="">Job Title</label></p>
          <input type="text" value={jobExperienceTitle} onChange={(e) => setJobExperienceTitle(e.target.value)} />

          <p><label htmlFor="">Company</label></p>
          <input type="text" value={company} onChange={(e) => setCompany(e.target.value)}/>

          <p><label htmlFor="">Start Date</label></p>
          <input type="text" value={startJob} onChange={(e) => setStartJob(e.target.value)} />

          <p><label htmlFor="">End Date</label></p>
          <input type="text" value={endJob} onChange={(e) => setEndJob(e.target.value)}/>

          <p><label htmlFor="">Location</label></p>
          <input type="text" value={companyLocation} onChange={(e) => setCompanyLocation(e.target.value)}/>

          <p><label htmlFor="">Responsibilites</label></p>
          <input type="text" value={responsibility} onChange={(e) => setResponsibility(e.target.value)}/>
        </div>
      </div>

      <div className="cvPreview">
        

        
        <div className="workExperienceInfo">
          <h3>{jobExperienceTitle}</h3>
          <div className="actualDetails">
            <p><b>{company} - </b>{companyLocation}</p>
            <p>{startJob} - {endJob}</p>
            <ul>
              <li>{responsibility}</li>
            </ul>
          </div>
        </div>
        
        

        <div className="skillsInfo">
          <p className="sectionTitle">Technical Skills</p>

          <div className="newSkill">
            <b>{skillCategory}: </b>
            <span>{skills}</span>
          </div>
        </div>

      </div>
    </>
  );
}