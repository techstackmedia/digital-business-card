import React from "react";
import twitterIcon from "../../images/twitter.png";
import facebookIcon from "../../images/facebook.png";
import instagramIcon from "../../images/instagram.png";
import githubIcon from "../../images/github.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <a href="https://twitter.com/techstackmedia"><img src={twitterIcon} alt="twitter icon" /></a>
        <a href="https://facebook.com/techstackmedia"><img src={facebookIcon} alt="facebook icon" /></a>
        <a href="https://instagram.com/techstackmedia"><img src={instagramIcon} alt="instagram icon" /></a>
        <a href="https://github.com/techstackmedia"><img src={githubIcon} alt="github icon" /></a>
      </div>
    </footer>
  );
};

export default Footer;
