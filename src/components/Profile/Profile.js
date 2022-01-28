import React from "react";
import profilePic from "../../images/profile.png";
// import mail from "../../images/mail.png";

const Profile = () => {
  const style = {
    width: "20px",
  };
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
            <button>
              <i className="fa fa-envelope" style={style}></i> Email
            </button>
            <button>
              <i className="fa fa-linkedin" style={style}></i> LinkedIn
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Profile;
