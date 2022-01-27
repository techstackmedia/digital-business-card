import React from "react";
import twitterIcon from "../../images/twitter.png";
import facebookIcon from "../../images/facebook.png";
import instagramIcon from "../../images/instagram.png";
import githubIcon from "../../images/github.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={twitterIcon} alt="twitter icon" />
        <img src={facebookIcon} alt="facebook icon" />
        <img src={instagramIcon} alt="instagram icon" />
        <img src={githubIcon} alt="github icon" />
      </div>
    </footer>
  );
};

export default Footer;
