import React from "react";
import { useState } from "react";
import "../App.css";

export default function Profile() {
  const [summary, setSummary] = useState(
    "Experienced software developer with over 5 years of expertise in web development and cloud technologies. Passionate about creating clean, efficient, and scalable code. Strong problem-solving skills and ability to work in fast-paced environments."
  );

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

      <div className="profileInfo">
        <p className="sectionTitle">Profile</p>
        <p>{summary}</p>
      </div>
    </>
  );
}
