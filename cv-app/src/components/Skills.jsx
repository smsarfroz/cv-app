import React from "react";
import "../App.css";

function SkillsPreview({ skillArray, editId, skillCategory, skills }) {
  return (
    <div className="skillsInfo">
      <p className="sectionTitle">Technical Skills</p>

      {skillArray.length > 0
        ? skillArray.map((skill) => {
            return (
              <div className="newSkill" key={skill.id}>
                {editId === skill.id ? (
                  <>
                    <b>{skillCategory}: </b>
                    <span>{skills}</span>
                  </>
                ) : (
                  <>
                    <b>{skill.skillCategory}: </b>
                    <span>{skill.skills}</span>
                  </>
                )}
              </div>
            );
          })
        : null}
    </div>
  );
}
function Card({
  id,
  handleChange,
  handleEdit,
  handleDelete,
  handleSave,
  handleCancel,
  skillCategory,
  skills,
  skill,
  isOpen,
}) {
  return (
    <>
      {isOpen ? (
        <>
          <p>
            <label htmlFor="">Skill Category</label>
          </p>
          <input
            type="text"
            name="skillCategory"
            value={skillCategory}
            onChange={handleChange}
          />
          <p>
            <label htmlFor="">Skills</label>
          </p>
          <input
            type="text"
            name="skills"
            value={skills}
            onChange={handleChange}
          />

          <div>
            <button onClick={() => handleDelete(id)}>Delete</button>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </div>
        </>
      ) : (
        <>
          <h2>{skill.skillCategory}:</h2>
          <p>{skill.skills}</p>
          <div>
            <button onClick={() => handleEdit(skill.id)}>Edit</button>
          </div>
        </>
      )}
    </>
  );
}
export default function Skills({
  skillArray,
  editId,
  skillCategory,
  skills,
  setSkillArray,
  setEditId,
  setSkillCategory,
  setSkills,
}) {
  function handleChange(e) {
    const { name, value } = e.target;
    switch (name) {
      case "skillCategory":
        setSkillCategory(value);
        break;
      case "skills":
        setSkills(value);
        break;
      default:
        break;
    }
  }
  function handleEdit(id) {
    const skillToEdit = skillArray.find((skill) => skill.id === id);

    if (skillToEdit) {
      setSkillCategory(skillToEdit.skillCategory);
      setSkills(skillToEdit.skills);
      setEditId(id);
    }
  }
  function handleDelete(id) {
    setSkillArray(skillArray.filter((skill) => skill.id !== id));
    if (editId === id) {
      setEditId(null);
    }
    setSkillCategory("");
    setSkills("");
  }
  function handleSave() {
    if (skillCategory.trim() !== "" && skills.trim() !== "") {
      if (editId !== null) {
        const updatedSkillArray = skillArray.map((skill) => {
          if (skill.id === editId) {
            return {
              ...skill,
              skillCategory: skillCategory,
              skills: skills,
            };
          } else {
            return skill;
          }
        });
        setSkillArray(updatedSkillArray);
        setEditId(null);
      } else {
        const newSkill = {
          id: Date.now(),
          skillCategory: skillCategory,
          skills: skills,
        };
        setSkillArray([...skillArray, newSkill]);
      }
      setSkillCategory("");
      setSkills("");
    }
  }
  function handleCancel() {
    setEditId(null);
  }

  function pushNewCardToArray() {
    setSkillCategory(null);
    setSkills(null);
    const newSkill = {
      id: Date.now(),
      skillCategory: null,
      skills: null,
    };
    setEditId(newSkill.id);
    setSkillArray([...skillArray, newSkill]);
  }
  return (
    <>
      <div className="skillsDetails">
        <p className="titleOfDetails">Skills</p>

        {skillArray.length > 0
          ? skillArray.map((skill) => {
              return (
                <Card
                  id={skill.id}
                  key={skill.id}
                  handleChange={handleChange}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  handleSave={handleSave}
                  handleCancel={handleCancel}
                  skillCategory={skillCategory}
                  skills={skills}
                  skill={skill}
                  setEditId={setEditId}
                  isOpen={editId === skill.id ? true : false}
                  setSkillCategory={setSkillCategory}
                  setSkills={setSkills}
                />
              );
            })
          : null}
        <button onClick={pushNewCardToArray}>+ Add Skill</button>
      </div>
    </>
  );
}

export { SkillsPreview };
