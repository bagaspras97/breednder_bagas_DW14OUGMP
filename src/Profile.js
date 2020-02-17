import React, { Component } from "react";
import { Form, Card, Button } from "react-bootstrap";
import "./Profile.css";
import { Link } from "react-router-dom";
import Premium from "./Premium";

class Profile extends Component {
  render() {
    return (
      <>
        <div className="div-left">
          <nav className="nav-left-profile">
            <Link to="./dashboard">
              <img
                className="img"
                src={require("./img/white-transparent-arrow.png")}
              />
            </Link>
            <img className="img1" src={require("./gambar-profile.jpg")} />
            <h3 className="profile">Profile Pet</h3>
          </nav>
          <div className="account-setting">
            <h4 className="h4-account">Account Setting</h4>
          </div>
          <div className="div-account-setting">
            <p>
              Email
              <span className="span-email">jokotingkir@gmail.com</span>
            </p>
            <hr></hr>
            <p>
              Phone<span className="span-phone">08123456789</span>
            </p>
          </div>
          <div className="discovery-setting">
            <h4 className="h4-discovery">Discovery Setting</h4>
          </div>
          <div className="div-discovery-setting">
            <p>
              Maximum Distance<span className="span-ds">10km</span>
            </p>
            <input type="range" />
            <p>Age</p>
            <Form.Control
              className="select-profile"
              as="select"
              placeholder="Species Pet"
            >
              <option>Adult</option>
              <option>1</option>
              <option>2</option>
            </Form.Control>
            <br />
            <p>Species</p>
            <Form.Control
              className="select-profile"
              as="select"
              placeholder="Species Pet"
            >
              <option>Species</option>
              <option>1</option>
              <option>2</option>
            </Form.Control>
            <Link to="./">
              <Button className="button-profile" variant="warning">
                Logout
              </Button>
            </Link>
          </div>
        </div>

        <div className="div-right">
          <Premium />
          <img className="card" src={require("./gambar-profile.jpg")} />
          <div className="card-information">
            <div className="card-information-name">
              Garaga<span>Cat</span>
            </div>
            <div className="card-information-profil">
              <img src={require("./img/profil.png")}></img>
              <span>Breeder : Joko</span>
            </div>
            <div className="card-information-distance">
              <img src={require("./img/distance.png")}></img>
              <span>10 Kilometer dari sini</span>
            </div>
            <div className="card-information-gender">
              <img src={require("./img/gender.png")}></img>
              <span>Male : Adult</span>
            </div>
            <div className="card-information-phone">
              <img src={require("./img/phone.png")}></img>
              <span>08123456789</span>
            </div>
            <Link to="./editprofile">
              <Button variant="warning" className="card-button">
                Edit
              </Button>
            </Link>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
