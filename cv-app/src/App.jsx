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
    id: Date.now(),
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
    id: Date.now(),
    skillCategory: skillCategory,
    skills: skills,
  };
  const [skillArray, setSkillArray] = useState([newSkill]);
  const [editIdSkill, setEditIdSkill] = useState(null);
  return (
    <>
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
          schoool={school}
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
          setSkillCategory={setSkillCategory}
          skills={skills}
          setSkills={setSkills}
          skillArray={skillArray}
          setSkillArray={setSkillArray}
          editIdSkill={editIdSkill}
          setEditIdSkill={setEditIdSkill}
        />

        <WorkExperience />
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
          schoool={school}
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
        {/* <WorkExperience /> */}
      </div>
    </>
  );
}
