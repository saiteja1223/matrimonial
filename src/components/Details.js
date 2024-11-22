import React from "react";
import "./details.css";

const Details = ({ profile, onBack }) => {
  if (!profile) {
    return (
      <div>
        <p>No profile details available.</p>
        <button onClick={onBack}>Back</button>
      </div>
    );
  }

  return (
    <div className="details-container">
      <button className="back-button" onClick={onBack}>
        Back
      </button>
      <div className="details-left">
        <img src={profile.photo} alt={profile.name} className="details-photo" />
        <h2>{profile.name}</h2>
      </div>
      <div className="details-right">
  <div className="detail-item">
    <strong>Age:</strong>
    <span>{profile.age}</span>
  </div>
  <div className="detail-item">
    <strong>Address:</strong>
    <span>{profile.address}</span>
  </div>
  <div className="detail-item">
    <strong>Habits:</strong>
    <span>{profile.habits}</span>
  </div>
  <div className="detail-item">
    <strong>Contact:</strong>
    <span>{profile.number}</span>
  </div>
  <div className="detail-item">
    <strong>Rating:</strong>
    <span>
      {Array(profile.rating)
        .fill("⭐")
        .join("")}
    </span>
  </div>
  <div className="detail-item">
    <strong>Education:</strong>
    <span>Bachelor's Degree in Engineering</span>
  </div>
  <div className="detail-item">
    <strong>Profession:</strong>
    <span>Software Engineer</span>
  </div>
  <div className="detail-item">
    <strong>Family Background:</strong>
    <span>Comes from a well-respected family with traditional values.</span>
  </div>
</div>

    </div>
  );
};

export default Details;
