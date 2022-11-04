import React, { Component } from "react";
import Footy from "./Footy.js";
import "./Contact.css";
import ContactHead from "./ContactHead.js";

class Contact extends Component {
  render() {
    return (
      <div className="body">
        <div className="container ">
          <div className="form-content">
            <ContactHead />
            <div className="name-row">
              <div className="fname">
                <label>First name</label>
                <div />
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your name"
                ></input>
              </div>

              <div className="lname">
                <label>Last name</label>
                <div />
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your name"
                ></input>
              </div>
            </div>
            <div className="eml">
              <label>Email</label>
              <div />
              <input
                type="email"
                id="email"
                placeholder="qbx@email.com"
              ></input>
            </div>

            <div className="msg">
              <label>Message</label>
              <div />
              <textarea
                type="text"
                id="message"
                placeholder="What would you like to talk about?"
              ></textarea>
            </div>
          </div>
          <div className="check">
            <input type="checkbox"></input>
            <text>
              You agree to providing your data to Derells who may contact you.
            </text>
          </div>
          <div>
            <button id="btn_submit">Submit</button>
          </div>
          <Footy />
        </div>
      </div>
    );
  }
}

export default Contact;
