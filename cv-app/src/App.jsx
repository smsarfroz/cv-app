import "./App.css";
import Education from "./components/Education";
import Personal from "./components/Personal";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { useState } from "react";

import { PersonalPreview } from "./components/Personal";
import { ProfilePreview } from "./components/Profile";
import { EducationPreview } from "./components/Education";
import { SkillsPreview } from "./components/Skills";
import { WorkExperiencePreview } from "./components/WorkExperience";

export default function App() {
  const [summary, setSummary] = useState(
    "Experienced software developer with over 5 years of expertise in web development and cloud technologies. Passionate about creating clean, efficient, and scalable code. Strong problem-solving skills and ability to work in fast-paced environments."
  );

  const [fullName, setFullName] = useState("John Smith");
  const [jobTitle, setJobTitle] = useState("Full Stack Developer");
  const [email, setEmail] = useState("john.smith@example.com");
  const [phoneNumber, setPhoneNumber] = useState("+1 (555) 123-4567");
  const [linkedIn, setLinkedIn] = useState("https://linkedin.com/in/johnsmith");
  const [github, setGithub] = useState("https://github.com/johnsmith");

  const [degree, setDegree] = useState("Master of Science in Computer Science");
  const [school, setSchool] = useState("University of Technology");
  const [startDate, setStartDate] = useState("2015");
  const [endDate, setEndDate] = useState("2017");
  const [location, setLocation] = useState("Boston,MA");
  const newEducation = {
    id: crypto.randomUUID(),
    degree: degree,
    school: school,
    startDate: startDate,
    endDate: endDate,
    location: location,
  };
  const [educationArray, setEducationArray] = useState([newEducation]);
  const [editId, setEditId] = useState(null);

  const [skillCategory, setSkillCategory] = useState("Programming Languages");
  const [skills, setSkills] = useState(
    "JavaScript , TypeScript , Python , Java , SQl"
  );
  const newSkill = {
    id: crypto.randomUUID(),
    skillCategory: skillCategory,
    skills: skills,
  };
  const [skillArray, setSkillArray] = useState([newSkill]);
  const [editIdSkill, setEditIdSkill] = useState(null);

  const [jobExperienceTitle, setJobExperienceTitle] = useState(
    "Senior Software Developer"
  );
  const [company, setCompany] = useState("Tech Innovations");
  const [startJob, setStartJob] = useState("January 2020");
  const [endJob, setEndJob] = useState("Present");
  const [companyLocation, setCompanyLocation] = useState("San Francisco,CA");
  const [editIdExperience, setEditIdExperience] = useState(null);
  // const [responsibilityState, setResponsibilityState] = useState('');
  const resp1 = {
    id: crypto.randomUUID(),
    responsibility:
      "Led a team of 5 developers to deliver high-quality web applications",
  };
  const resp2 = {
    id: crypto.randomUUID(),
    responsibility:
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
  };
  const resp3 = {
    id: crypto.randomUUID(),
    responsibility: "Refactored legacy codebase, improving performance by 30%",
  };
  const [responsibilityArray, setResponsibilityArray] = useState([
    resp1,
    resp2,
    resp3,
  ]);
  const newWork = {
    id: crypto.randomUUID(),
    jobExperienceTitle: jobExperienceTitle,
    company: company,
    startJob: startJob,
    endJob: endJob,
    companyLocation: companyLocation,
    responsibilityArray: responsibilityArray,
  };
  const [workArray, setWorkArray] = useState([newWork]);
  return (
    <div className="container">
      <div className="inputDetails">
        <Personal 
          fullName={fullName}
          setFullName={setFullName}
          jobTitle={jobTitle}
          setJobTitle={setJobTitle}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          email={email}
          setEmail={setEmail}
          github={github}
          setGithub={setGithub}
          linkedIn={linkedIn}
          setLinkedIn={setLinkedIn}
        />

        <Profile summary={summary} setSummary={setSummary} />

        <Education 
          educationArray={educationArray}
          editId={editId}
          degree={degree}
          school={school}
          startDate={startDate}
          endDate={endDate}
          location={location}

          setEducationArray={setEducationArray}
          setEditId={setEditId}
          setDegree={setDegree}
          setSchool={setSchool}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          setLocation={setLocation}
        />

        <Skills 
          skillCategory={skillCategory}
          skills={skills}
          skillArray={skillArray}
          editIdSkill={editIdSkill}
          
          setSkillCategory={setSkillCategory}
          setSkills={setSkills}
          setSkillArray={setSkillArray}
          setEditIdSkill={setEditIdSkill}
        />

        <WorkExperience 
          jobExperienceTitle={jobExperienceTitle}
          company={company}
          startJob={startJob}
          endJob={endJob}
          companyLocation={companyLocation}
          editIdExperience={editIdExperience}
          responsibilityArray={responsibilityArray}
          workArray={workArray}

          setJobExperienceTitle={setJobExperienceTitle}
          setCompany={setCompany}
          setStartJob={setStartJob}
          setEndJob={setEndJob}
          setCompanyLocation={setCompanyLocation}
          setEditIdExperience={setEditIdExperience}
          setResponsibilityArray={setResponsibilityArray}
          setWorkArray={setWorkArray}
        />
      </div>

      <div className="cvPreview">
        <PersonalPreview
          fullName={fullName}
          jobTitle={jobTitle}
          phoneNumber={phoneNumber}
          email={email}
          github={github}
          linkedIn={linkedIn}
        />
        <ProfilePreview summary={summary} />
        <EducationPreview 
          educationArray={educationArray}
          editId={editId}
          degree={degree}
          school={school}
          startDate={startDate}
          endDate={endDate}
          location={location}
        />
        <SkillsPreview 
          skillArray={skillArray}
          editIdSkill={editIdSkill}
          skillCategory={skillCategory}
          skills={skills}
        />
        <WorkExperiencePreview
          workArray={workArray}
          editIdExperience={editIdExperience}
          jobExperienceTitle={jobExperienceTitle}
          company={company}
          companyLocation={companyLocation}
          responsibilityArray={responsibilityArray}
          startJob={startJob}
          endJob={endJob}
        />
      </div>
    </div>
  );
}
