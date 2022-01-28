import React from "react";
import profilePic from "../../images/profile.jpeg";
// import mail from "../../images/mail.png";

const Info = () => {
  const icon = {
    width: "20px",
  };

  const img = {
    borderTopRightRadius: "14px",
    borderTopLeftRadius: "14px",
  };

  const link = {
    textDecoration: "none",
    color: "#f5f5f5",
  };

  const email = () => {
    window.open("mailto:info@techstackmedia.com");
  };

  const linkedIn = () => {
    window.open("https://twitter.com/techstackmedia");
  };

  return (
    <header>
      <nav>
        <div className="person-profile">
          <img style={img} src={profilePic} alt="profile" width="100%" />
        </div>
        <div className="profile-info">
          <div>
            <h2>Bello Osagie</h2>
            <h4>Fullstack Developer</h4>
            <small>
              <a
                style={link}
                href="https://techstackmedia.com"
                target="_blank"
                rel="noreferrer"
              >
                techstackmedia.com
              </a>
            </small>
          </div>
          <div>
            <button onClick={email}>
              <i className="fa fa-envelope" style={icon}></i> Email
            </button>
            <button onClick={linkedIn}>
              <i className="fa fa-linkedin" style={icon}></i> LinkedIn
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
// mailto:info@techstackmedia.com
// https://linkedin.com/in/techstackmedia

export default Info;
