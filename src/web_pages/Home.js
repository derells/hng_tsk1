import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footy from "./Footy.js";
import Socials from "./Socials";
import pfp from "../web_pages/images/pfp.png";

class Home extends Component {
  render() {
    return (
      <div className="container">
        <header className="profile">
          <img className="picture" src={pfp} alt="..." />
          <p id="twitter">Adenrele Adeniji</p>
        </header>
        <div>
          <div className="links">
            <a
              className="link"
              id="twitter"
              href="https://twitter.com/rellsinnit?s=20"
            >
              Twitter Link
            </a>

            <a
              className="link"
              id="btn_zuri"
              href="https://training.zuri.team/"
            >
              Zuri Team
            </a>

            <a className="link" id="books" href="http://books.zuri.team">
              Zuri Books
            </a>

            <a
              className="link"
              id="books_python"
              href="https://books.zuri.team/python-for-beginners?ref_id=<Derells>"
            >
              Python Books
            </a>

            <a className="link" id="pitch" href="https://background.zuri.team">
              Background checks for Coders
            </a>

            <a
              className="link"
              id="book_design"
              href="https://books.zuri.team/design-rules"
            >
              Free zuri design book
            </a>

            <Link to="/contact" className="link" id="contact">
              Contact Me
            </Link>
          </div>
          <script id="slack">{console.log("Derells")}</script>
        </div>
        <Socials />
        <Footy />
      </div>
    );
  }
}
export default Home;
