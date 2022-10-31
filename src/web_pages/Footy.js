import React, { Component } from "react";
import "./Footy.css";

class Footy extends Component {
  render() {
    return (
      <footer>
        <div class="social">
          <div>
            <a href="https://oasiscommunity.slack.com/archives/D02SUT48CHX">
              <img src="./images/slickon.png" alt="icons" class="icon" />
            </a>
          </div>
          <div>
            <a href="https://github.com/">
              <img src="./images/giticon.png" alt="icons" class="icon" />
            </a>
          </div>
        </div>

        <div class="footer ">
          <div className="footer-content">
            <div>
              <img
                src="./images/zoori.png"
                alt="footer-img"
                class="footer-icon2"
              />
            </div>
            <div>
              <p id="text">HNG Intership 9 Frontend Task</p>
            </div>
            <div>
              <img
                src="./images/ingressive.png"
                alt="footer-img"
                class="footer-icon1"
              />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footy;
