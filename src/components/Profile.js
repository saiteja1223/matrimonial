import React, { useState } from "react";
import "./profile.css";
import Details from "./Details";

function Profile() {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const arr = [
    {
      id: 1,
      name: "Indhu Reddy",
      rating: 5,
      photo: "./asserts/indhu1.jpg",
      age: 22,
      address: "Gajwel",
      habits: "Loving to travel around the world",
      number: "8096394352",
    },
    {
      id: 2,
      name: "Ashok",
      rating: 4,
      photo: "./asserts/ashok.jpg",
      age: 23,
      address: "Gajwel",
      habits: "Loving to travel around the world",
      number: "8096394352",
    },
    {
      id: 3,
      name: "Ajay",
      rating: 2,
      photo: "./asserts/ajay.jpg",
      age: 23,
      address: "Gajwel",
      habits: "Loving to travel around the world",
      number: "8096394352",
    },
    {
      id: 4,
      name: "Hari",
      rating: 5,
      photo: "./asserts/hari.jpg",
      age: 23,
      address: "Gajwel",
      habits: "Loving to travel around the world",
      number: "8096394352",
    },
    {
      id: 5,
      name: "Vinay",
      rating: 4,
      photo: "./asserts/vinay.jpg",
      age: 23,
      address: "Gajwel",
      habits: "Loving to travel around the world",
      number: "8096394352",
    },
  ];

  const handleProfileClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleBack = () => {
    setSelectedProfile(null);
  };

  return (
  
    <div>
          {selectedProfile &&<div className="popup"> <Details profile={selectedProfile} onBack={handleBack} /></div>}
        <div className="profiles-container">
          {arr.map((item) => (
            <div
              className="mainprofile"
              key={item.id}
              onClick={() => handleProfileClick(item)}
            >
              <div className="leftprofile">
                <div className="profilephoto">
                  <img src={item.photo} alt={item.name} />
                </div>
                <div className="profilerating">
                  {Array(item.rating)
                    .fill("⭐")
                    .map((star, index) => (
                      <span key={index}>{star}</span>
                    ))}
                </div>
              </div>
              <div className="rightprofile">
                <div className="profilename">{item.name}</div>
                <div className="profiledetails">
                  <p>Age: {item.age}</p>
                  <p>Contact: {item.number}</p>
                </div>
                <div>
                  <button style={{backgroundColor:'green'}}>Intersted</button>
                  </div>
              </div>
            </div>
          ))}
        </div>
     
    </div>
  );
}

export default Profile;
