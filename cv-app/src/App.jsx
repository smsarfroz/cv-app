import { useState } from 'react'
import './App.css'

export default function App() {
  const [fullName, setFullName] = useState('John Smith');
  const [jobTitle, setJobTitle] = useState('Full Stack Developer');
  const [email, setEmail] = useState('john.smith@example.com');
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 123-4567');
  const [linkedIn, setLinkedIn] = useState('https://linkedin.com/in/johnsmith');
  const [github, setGithub] = useState('https://github.com/johnsmith')

  const [summary, setSummary] = useState('Experienced software developer with over 5 years of expertise in web development and cloud technologies. Passionate about creating clean, efficient, and scalable code. Strong problem-solving skills and ability to work in fast-paced environments.')
  
  const [degree, setDegree] = useState('');
  const [school, setSchool] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [location, setLocation] = useState('');

  const [skillCategory, setSkillCategory] = useState('');
  const [skills, setSkills] = useState('');

  return (
    <>
      <div className="inputDetails">
        <div className="personalDetails">
          <p className="titleOfDetails">Personal Details</p>
          <label>
            <p className='formLabel'>Full Name</p> 
          </label>
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          <label>
            <p className='formLabel'>Job Title</p> 
          </label>
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          <label>
            <p className='formLabel'>Email</p> 
          </label>
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label>
            <p className='formLabel'>Phone Number</p> 
          </label>
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          <label>
            <p className='formLabel'>LinkedIn Profile</p> 
          </label>
            <input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
          <label>
            <p className='formLabel'>Github Profile</p> 
          </label>
            <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
        </div>


        <div className="profileDetails">
          <p className="titleOfDetails">Profile</p>
          <p><label>Summary</label></p>
          <textarea name="" id="summaryTextarea" value={summary} onChange={(e) => setSummary(e.target.value)}></textarea>
        </div>

        <div className="educationDetails">
          
          <p className="titleOfDetails">Education</p>
          <p><label htmlFor="">Degree</label></p>
          <input type="text" value={degree} onChange={(e) => setDegree(e.target.value)} />

          <p><label htmlFor="">School or University</label></p>
          <input type="text" value={school} onChange={(e) => setSchool(e.target.value)} />

          <p><label htmlFor="">Start Year</label></p>
          <input type="text" value={startDate} onChange={(e) => setStartDate(e.target.value)}/>

          <p><label htmlFor="">End Year</label></p>
          <input type="text" value={endDate} onChange={(e) => setEndDate(e.target.value)}/>

          <p><label htmlFor="">Location</label></p>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)}/>
        </div>

        <div className="skillsDetails">
          <p className="titleOfDetails">Skills</p>

          <p><label htmlFor="">Skill Category</label></p>
          <input type="text" value={skillCategory} onChange={(e) => setSkillCategory(e.target.value)}/>

          <p><label htmlFor="">Skills</label></p>
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>
      </div>

      <div className="cvPreview">
        <div className="personalDetailsPreview">
          <h1>{fullName}</h1>
          <h3>{jobTitle}</h3>
          <div className="reachMeInfo">
            <p><b>Phone: </b> {phoneNumber} </p>
            <p><b>Email: </b> {email} </p>
            <p><b>Github: </b> {github} </p>
            <p><b>LinkedIn: </b> {linkedIn} </p>
          </div>
        </div>

        <div className="profileInfo">
            <p className="sectionTitle">Profile</p>
            <p>{summary}</p>
        </div>

        <div className="educationInfo">
          <p className="sectionTitle">Education</p>

          <div className="newEducation">
            <h2>{degree}</h2>
              <div className="actualDetails">
                <span>{school} - <span>{location}</span></span>
                <p>{startDate} - {endDate}</p>
              </div>
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