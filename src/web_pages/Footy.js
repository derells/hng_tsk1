import React, { Component } from "react";
import "./Footy.css";
import slack from "../web_pages/images/slickon.png";
import giticon from "../web_pages/images/giticon.png";
import ingre from "../web_pages/images/ingressive.png";
import zoori from "../web_pages/images/zoori.png";

class Footy extends Component {
  render() {
    return (
      <footer>
        <div class="social">
          <div>
            <a href="https://oasiscommunity.slack.com/archives/D02SUT48CHX">
              <img src={slack} alt="icons" class="icon" />
            </a>
          </div>
          <div>
            <a href="https://github.com/">
              <img src={giticon} alt="icons" class="icon" />
            </a>
          </div>
        </div>

        <div class="footer ">
          <div className="footer-content">
            <div>
              <img src={zoori} alt="footer-img" class="footer-icon2" />
            </div>
            <div>
              <p id="text">HNG Intership 9 Frontend Task</p>
            </div>
            <div>
              <img src={ingre} alt="footer-img" class="footer-icon1" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footy;
