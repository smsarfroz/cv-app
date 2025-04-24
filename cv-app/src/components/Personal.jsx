import React from "react";
import "../App.css";

function PersonalPreview({
  fullName,
  jobTitle,
  phoneNumber,
  email,
  github,
  linkedIn,
}) {
  return (
    <div className="personalDetailsPreview">
      <h1>{fullName}</h1>
      <h3>{jobTitle}</h3>
      <div className="reachMeInfo">
        <p>
          <b>Phone: </b> {phoneNumber}{" "}
        </p>
        <p>
          <b>Email: </b> {email}{" "}
        </p>
        <p>
          <b>Github: </b> {github}{" "}
        </p>
        <p>
          <b>LinkedIn: </b> {linkedIn}{" "}
        </p>
      </div>
    </div>
  );
}
export default function Personal({
  fullName,
  setFullName,
  jobTitle,
  setJobTitle,
  phoneNumber,
  setPhoneNumber,
  email,
  setEmail,
  github,
  setGithub,
  linkedIn,
  setLinkedIn,
}) {
  return (
    <>
      <div className="personalDetails">
        <p className="titleOfDetails">Personal Details</p>
        <label>
          <p className="formLabel">Full Name</p>
        </label>
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>
          <p className="formLabel">Job Title</p>
        </label>
        <input
          type="text"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <label>
          <p className="formLabel">Email</p>
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>
          <p className="formLabel">Phone Number</p>
        </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <label>
          <p className="formLabel">LinkedIn Profile</p>
        </label>
        <input
          type="text"
          value={linkedIn}
          onChange={(e) => setLinkedIn(e.target.value)}
        />
        <label>
          <p className="formLabel">Github Profile</p>
        </label>
        <input
          type="text"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
        />
      </div>
    </>
  );
}

export { PersonalPreview };
