import { useState } from "react";
import React from "react";
import "../App.css";

function Card({
  id,
  isOpen,
  work,
  jobExperienceTitle,
  company,
  startJob,
  endJob,
  companyLocation,
  handleChange,
  handleCancel,
  handleDelete,
  handleEdit,
  handleSave,
  handleAddNewResponsibility,
  responsibilityArray,
  handleDeleteResponsibility
}) {
  
  return (
    <>
      {isOpen ? (
        <>
          <h2>{jobExperienceTitle}</h2>

          <p>
            <label htmlFor="">Job Title</label>
          </p>
          <input
            type="text"
            value={jobExperienceTitle}
            onChange={handleChange}
          />

          <p>
            <label htmlFor="">Company</label>
          </p>
          <input type="text" value={company} onChange={handleChange} />

          <p>
            <label htmlFor="">Start Date</label>
          </p>
          <input type="text" value={startJob} onChange={handleChange} />

          <p>
            <label htmlFor="">End Date</label>
          </p>
          <input type="text" value={endJob} onChange={handleChange} />

          <p>
            <label htmlFor="">Location</label>
          </p>
          <input type="text" value={companyLocation} onChange={handleChange} />

          <p>
            <label htmlFor="">Responsibilities</label>
          </p>
          {
            responsibilityArray.map(responsibility => {
              return (
                <div className="responsiblity" key={responsibility.id}>
                  <input type="text" value={responsibility} onChange={handleChange} />
                  <button onClick={() => handleDeleteResponsibility(responsibility.id)}>X</button>
                </div>
              );
            })
          }

          <div>
            <button onClick={handleAddNewResponsibility}>Add Responsibility</button>
          </div>
          <div>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h2>{work.jobExperienceTitle}:</h2>
          <div>
            <button onClick={() => handleEdit(work.id)}>Edit</button>
          </div>
        </>
      )}
    </>
  );
}
export default function WorkExperience() {
  const [jobExperienceTitle, setJobExperienceTitle] = useState(
    "Senior Software Developer"
  );
  const [company, setCompany] = useState("Tech Innovations");
  const [startJob, setStartJob] = useState("January 2020");
  const [endJob, setEndJob] = useState("Present");
  const [companyLocation, setCompanyLocation] = useState("San Francisco,CA");
  const [editId, setEditId] = useState(null);
  const resp1 = {
    id: Date.now(),
    responsibility:
      "Led a team of 5 developers to deliver high-quality web applications",
  };
  const resp2 = {
    id: Date.now(),
    responsibility:
      "Implemented CI/CD pipelines that reduced deployment time by 40%",
  };
  const resp3 = {
    id: Date.now(),
    responsibility: "Refactored legacy codebase, improving performance by 30%",
  };
  const [responsibilityArray, setResponsibilityArray] = useState([
    resp1,
    resp2,
    resp3,
  ]);
  const newWork = {
    id: Date.now(),
    jobExperienceTitle: jobExperienceTitle,
    company: company,
    startJob: startJob,
    endJob: endJob,
    companyLocation: companyLocation,
    responsibilityArray: responsibilityArray,
  };
  const [workArray, setWorkArray] = useState([newWork]);

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "jobExperienceTitle":
        setJobExperienceTitle(value);
        break;
      case "company":
        setCompany(value);
        break;
      case "startJob":
        setStartJob(value);
        break;
      case "endJob":
        setEndJob(value);
        break;
      case "companyLocation":
        setCompanyLocation(value);
        break;
      default:
        break;
    }
  }
  function handleDelete(id) {
    setWorkArray(workArray.filter((work) => work.id !== id));
    if (editId === id) {
      setEditId(null);
    }
    setJobExperienceTitle("");
    setCompany("");
    setStartJob("");
    setEndJob("");
    setCompanyLocation("");
  }
  function handleCancel() {
    setEditId(null);
  }
  function handleSave() {
    if (
      jobExperienceTitle.trim() !== "" &&
      company.trim() !== "" &&
      startJob.trim() !== "" &&
      endJob.trim() !== "" &&
      companyLocation.trim() !== ""
    ) {
      if (editId !== null) {
        const updatedWorkArray = workArray.map((work) => {
          if (editId === work.id) {
            return {
              ...work,
              jobExperienceTitle: jobExperienceTitle,
              company: company,
              startJob: startJob,
              endJob: endJob,
              companyLocation: companyLocation,
            };
          } else {
            return work;
          }
        });
        setWorkArray(updatedWorkArray);
        setEditId(null);
      } else {
        const newWork = {
          id: Date.now(),
          jobExperienceTitle: jobExperienceTitle,
          company: company,
          startJob: startJob,
          endJob: endJob,
          companyLocation: companyLocation,
          responsibilityArray: responsibilityArray,
        };
        setWorkArray([...workArray, newWork]);
      }
      setJobExperienceTitle("");
      setCompany("");
      setStartJob("");
      setEndJob("");
      setCompanyLocation("");
    }
  }
  function handleEdit(id) {
    const workToEdit = workArray.find((work) => work.id === id);
    if (workToEdit) {
      setJobExperienceTitle(workToEdit.jobExperienceTitle);
      setCompany(workToEdit.company);
      setStartJob(workToEdit.startJob);
      setEndJob(workToEdit.endJob);
      setCompanyLocation(workToEdit.companyLocation);
      setEditId(id);
    }
  }
  function handlePushNewWork() {
    const newWork = {
      id: Date.now(),
      jobExperienceTitle: jobExperienceTitle,
      company: company,
      startJob: startJob,
      endJob: endJob,
      companyLocation: companyLocation,
      responsibilityArray: responsibilityArray,
    };
    setEditId(newWork.id);
    setWorkArray([...workArray, newWork]);
  }
  function handleAddNewResponsibility() {
    const newResponsibility = {
      id: Date.now(),
      responsibility: null
    }
    setResponsibilityArray([...responsibilityArray, newResponsibility]);
  }
  function handleDeleteResponsibility(id) {
    setResponsibilityArray(responsibilityArray.filter(responsibility => responsibility.id !== id));
  }
  return (
    <>
      <div className="experienceDetails">
        <p className="titleOfDetails">Work Experience</p>
        {workArray.length > 0
          ? workArray.map((work) => {
              return <Card 
              key={work.id}
              id={work.id}
              isOpen={editId === work.id ? true: false}
              work={work}
              jobExperienceTitle={jobExperienceTitle}
              company={company}
              startJob={startJob}
              endJob={endJob}
              companyLocation={companyLocation}
              handleChange={handleChange}
              handleCancel={handleCancel}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSave={handleSave}
              handleAddNewResponsibility={handleAddNewResponsibility}
              responsibilityArray={responsibilityArray}
              handleDeleteResponsibility={handleDeleteResponsibility}
              />;
            })
          : null}
        <button onClick={handlePushNewWork}>Add Experience</button>
      </div>

      <div className="workExperienceInfo">
        {workArray.length > 0
          ? workArray.map((work) => {
              return (
                <div className="newWork" key={work.id}>
                  {editId === work.id ? (
                    <>
                      <h3>{jobExperienceTitle}</h3>
                      <div className="actualDetails">
                        <p>
                          <b>{company} - </b>
                          {companyLocation}
                        </p>
                        <p>
                          {startJob} - {endJob}
                        </p>
                        <ul>
                          { 
                            responsibilityArray.map(responsibility => {
                              return (
                                <li key={responsibility.id}>{responsibility}</li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <h3>{work.jobExperienceTitle}</h3>
                      <div className="actualDetails">
                        <p>
                          <b>{work.company} - </b>
                          {work.companyLocation}
                        </p>
                        <p>
                          {work.startJob} - {work.endJob}
                        </p>
                        <ul>
                          {
                            work.responsibilityArray.map(responsibility => {
                              return (
                                <li key={responsibility.id}>{responsibility}</li>
                              );
                            })
                          }
                        </ul>
                      </div>
                    </>
                  )}
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
