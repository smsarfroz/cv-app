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

          <div className="profileInfo">
            <p className="sectionTitle">Profile</p>
            <p>{summary}</p>
          </div>
        </div>
      </div>
    </>
  );
}