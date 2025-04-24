import React from "react";
// import { useState } from "react";
import "../App.css";

function ProfilePreview({summary}) {
  return (
    <div className="profileInfo">
      <p className="sectionTitle">Profile</p>
      <p>{summary}</p>
    </div>
  );
}
export default function Profile({summary, setSummary}) {
  

  return (
    <>
      <div className="profileDetails">
        <p className="titleOfDetails">Profile</p>
        <p>
          <label>Summary</label>
        </p>
        <textarea
          name=""
          id="summaryTextarea"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
        ></textarea>
      </div>
    </>
  );
}

export {ProfilePreview}