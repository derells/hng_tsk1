import React, { Component } from "react";
import "./Socials.css";
import slack from "../web_pages/images/slickon.png";
import giticon from "../web_pages/images/giticon.png";

class Socials extends Component {
  render() {
    return (
      <div className="social">
        <div className="social-content">
          <a href="https://oasiscommunity.slack.com/archives/D02SUT48CHX">
            <img src={slack} alt="icons" className="slkicon" />
          </a>

          <a href="https://github.com/">
            <img src={giticon} alt="icons" className="giticon" />
          </a>
        </div>
      </div>
    );
  }
}
export default Socials;
