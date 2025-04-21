import { useState } from "react";
import React from "react";
import "../App.css";

function DetailedCard({
  id,
  degree,
  school,
  startDate,
  endDate,
  location,
  handleDelete,
  handleSave,
  handleChange,
  setEditId
}) {
  return (
    <>
      <h2>{degree}</h2>
      <p>
        <label htmlFor="">Degree</label>
      </p>
      <input name="degree" type="text" value={degree} onChange={handleChange} />

      <p>
        <label htmlFor="">School or University</label>
      </p>
      <input name="school" type="text" value={school} onChange={handleChange} />

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
        <button onClick={() => handleDelete(id)}>Delete</button>
        <button onClick={handleSave}>Save</button>
        <button onClick={() => setEditId(null)}>Cancel</button>
      </div>
    </>
  );
}
function ClosedCard({
  education,
  handleEdit
}) {
  return (
    <>
      <h2>{education.degree}</h2>
      <div>
        <button onClick={() => handleEdit(education.id)}>Edit</button>
      </div>
    </>
  );
}
function Card({
  education,
  isOpen,
  handleChange,
  handleDelete,
  handleEdit,
  handleSave,
  id,
  setEditId
}) {
  return (
    <>
      {isOpen ? (
        <DetailedCard
          education={education}
          handleDelete={handleDelete}
          handleSave={handleSave}
          handleChange={handleChange}
          setEditId={setEditId}
          key={id}
        />
      ) : (
        <ClosedCard education={education} handleEdit={handleEdit} key={id}/>
      )}
    </>
  );
}
export default function Education() {
  const [degree, setDegree] = useState("");
  const [school, setSchool] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [educationArray, setEducationArray] = useState([]);
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
  function handleSave() {
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
              ...education, //cuz I want the same id
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
        setEducationArray(...educationArray, newEducation);
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
    console.log(educationToEdit);
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
  function pushNewCardtoArray() {
    const newEducation = {
      id: Date.now(),
      degree: null,
      school: null,
      startDate: null,
      endDate: null,
      location: null,
    }

    setEditId(newEducation.id);
    setEducationArray([...educationArray, newEducation]);

  }
  return (
    <>
      <div className="educationDetails">
        <p className="titleOfDetails">Education</p>
        {
        educationArray.length > 0 ? educationArray.map((education) => {
          return (
            <Card
              education={education}
              isOpen={editId === education.id ? true : false}
              handleChange={handleChange}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleSave={handleSave}
              id={education.id}
              setEditId={setEditId}
              key={education.id}
            />
          );
        }) : null
        
        }

        <button onClick={pushNewCardtoArray}>Add Education</button>
      </div>

      <div className="educationInfo">
        <p className="sectionTitle">Education</p>

        {educationArray.length > 0 ? educationArray.map((education) => {
          return (
            <div className="newEducation" key={education.id}>
              <h2>{education.degree}</h2>
              <div className="actualDetails">
                <span>
                  {education.school} - <span>{education.location}</span>
                </span>
                <p>
                  {education.startDate} - {education.endDate}
                </p>
              </div>

            </div>
          );
        }) : null
        }
      </div>
    </>
  );
}
