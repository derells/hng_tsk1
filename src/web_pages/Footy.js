import React, { Component } from "react";
import "./Footy.css";
import ingre from "../web_pages/images/ingressive.png";
import zoori from "../web_pages/images/zoori.png";

class Footy extends Component {
  render() {
    return (
      <footer>
        <div className="footer">
          <div className="footer-content">
            <div>
              <img src={zoori} alt="footer-img" className="footer-icon1" />
            </div>
            <div>
              <p id="text">HNG Intership 9 Frontend Task</p>
            </div>
            <div>
              <img src={ingre} alt="footer-img" className="footer-icon2" />
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footy;
