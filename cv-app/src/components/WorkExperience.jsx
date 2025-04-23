import { useState } from "react";
import React from "react";
import '../App.css'

export default function WorkExperience() {
      const [jobExperienceTitle, setJobExperienceTitle] = useState('');
      const [company, setCompany] = useState('');
      const [startJob, setStartJob] = useState('');
      const [endJob, setEndJob] = useState('');
      const [companyLocation, setCompanyLocation] = useState('');
      const [responsibility, setResponsibility] = useState('');
    
    return (
        <>
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
        </>
    );
}