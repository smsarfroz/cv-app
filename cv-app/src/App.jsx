import { useState } from 'react'
import './App.css'

export default function App() {
  const [fullName, setFullName] = useState('John Smith');
  const [jobTitle, setJobTitle] = useState('Full Stack Developer');
  const [email, setEmail] = useState('john.smith@example.com');
  const [phoneNumber, setPhoneNumber] = useState('+1 (555) 123-4567');
  const [linkedIn, setLinkedIn] = useState('https://linkedin.com/in/johnsmith');
  const [github, setGithub] = useState('https://github.com/johnsmith')

  return (
    <>
      <div className="inputDetails">
        <div className="personalDetails">
          <label>
            <p className='formLabel'>Full Name</p> 
            <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} />
          </label>
          <label>
            <p className='formLabel'>Job Title</p> 
            <input type="text" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} />
          </label>
          <label>
            <p className='formLabel'>Email</p> 
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          <label>
            <p className='formLabel'>Phone Number</p> 
            <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
          </label>
          <label>
            <p className='formLabel'>LinkedIn Profile</p> 
            <input type="text" value={linkedIn} onChange={(e) => setLinkedIn(e.target.value)} />
          </label>
          <label>
            <p className='formLabel'>Github Profile</p> 
            <input type="text" value={github} onChange={(e) => setGithub(e.target.value)} />
          </label>
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
      </div>
    </>
  );
}