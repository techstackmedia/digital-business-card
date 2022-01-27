import React from "react";
import profilePic from "../../images/profile.png";

const Profile = () => {
  return (
    <header>
      <nav>
        <div className="person-profile">
          <img src={profilePic} alt="profile" width="100%" />
        </div>
        <div className="profile-info">
          <div>
            <h2>Laura Smith</h2>
            <h4>Frontend Developer</h4>
            <small>laurasmith.website</small>
          </div>
          <div>
            <button>Email</button>
            <button>LinkedIn</button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Profile;
