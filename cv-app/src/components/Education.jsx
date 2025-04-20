import { useState } from "react";
import React from "react";
import "../App.css";

export default function Education() {
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [educationArray, setEducationArray] = useState("");
  // const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "degree":
        setDegree(value);
        break;
      case "school":
        setSchool(value);
        break;
      case "startDate":
        setStartDate(value);
        break;
      case "endDate":
        setEndDate(value);
        break;
      case "location":
        setLocation(value);
        break;
      default:
        break;
    }
  }
  function handleSave(id) {
    if (
      degree.trim() !== "" &&
      school.trim() !== "" &&
      startDate.trim() !== "" &&
      endDate.trim() !== "" &&
      location.trim() !== ""
    ) {
      if (editId !== null) {
        const updatedEducationArray = educationArray.map((education) => {
          if (education.id === editId) {
            return {
              id: id, //because I want the same id property here
              degree: degree,
              school: school,
              startDate: startDate,
              endDate: endDate,
              location: location,
            };
          } else {
            return education;
          }
        });
        setEducationArray(updatedEducationArray);
        setEditId(null);
      } else {
        const newEducation = {
          id: Date.now(),
          degree: degree,
          school: school,
          startDate: startDate,
          endDate: endDate,
          location: location,
        };
        setEducationArray(newEducation);
      }
      setDegree("");
      setSchool("");
      setStartDate("");
      setEndDate("");
      setLocation("");
    }
  }
  function handleEdit(id) {
    const educationToEdit = educationArray.find(
      (education) => education.id === id
    );
    if (educationToEdit) {
      setDegree(educationToEdit.degree);
      setSchool(educationToEdit.school);
      setStartDate(educationToEdit.startDate);
      setEndDate(educationToEdit.endDate);
      setLocation(educationToEdit.location);
      setEditId(id);
    }
  }
  function handleDelete(id) {
    setEducationArray(
      educationArray.filter((education) => education.id !== id)
    );
    if (editId === id) {
      setEditId(null);
    }
  }
  return (
    <>
      <div className="educationDetails">
        <p className="titleOfDetails">Education</p>
        <p>
          <label htmlFor="">Degree</label>
        </p>
        <input
          name="degree"
          type="text"
          value={degree}
          onChange={handleChange}
        />

        <p>
          <label htmlFor="">School or University</label>
        </p>
        <input
          name="school"
          type="text"
          value={school}
          onChange={handleChange}
        />

        <p>
          <label htmlFor="">Start Year</label>
        </p>
        <input
          name="startDate"
          type="text"
          value={startDate}
          onChange={handleChange}
        />

        <p>
          <label htmlFor="">End Year</label>
        </p>
        <input
          name="endDate"
          type="text"
          value={endDate}
          onChange={handleChange}
        />
        <p>
          <label htmlFor="">Location</label>
        </p>
        <input
          name="location"
          type="text"
          value={location}
          onChange={handleChange}
        />

        <div>
          <button onClick={() => handleDelete()}>Delete</button>
          <button>Save</button>
          <button>Cancel</button>
        </div>
      </div>

      <div className="educationInfo">
        <p className="sectionTitle">Education</p>

        {educationArray.map((education) => {
          <div className="newEducation">
            <h2>{education.degree}</h2>
            <div className="actualDetails">
              <span>
                {education.school} - <span>{education.location}</span>
              </span>
              <p>
                {education.startDate} - {education.endDate}
              </p>
            </div>

            <div>
              <button onChange={() => handleEdit(education.id)}>Delete</button>
              <button onChange={() => handleSave(education.id)}>Save</button>
              <button>Cancel</button>
            </div>
          </div>;
        })}
      </div>
    </>
  );
}
