import React from "react";
import "./About.css";
import mail from "../../assets/mail.svg";
import phone from "../../assets/phone.svg";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return( 
  <div className="aboutWrapper">
      <h1>About our Web Application: </h1>
      <p>
        This is a simple web application that allows you to search for recipes based on ingredients
        and meal type.<br/>You can also save your favorite recipes for later use.
      </p>
      <h2>Contact us:</h2>
      <div>
        <h4> <img src={mail} alt="mail" /> andrianakaragianni@outlook.com</h4>
        <h4> <img src={phone} alt="phone" /> +306900000000</h4>
      </div>
      <button className="backBtn" onClick={() => navigate(-1)}>
        Go Back
      </button>

  </div>);
};

export default About;