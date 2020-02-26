import React, { Component } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";
import data from "./data.json";
import Deck from "./swipe_card/Deck";

class Dashboard extends Component {
  render() {
    return (
      <>
        <div className="div-left">
          <nav className="nav-left-1">
            <Link to="/profile">
              <img src={require("./gambar-profile.jpg")} />
            </Link>
            <h3 className="float-right pet-name-1">Garaga</h3>
          </nav>
          <h2>Match</h2>
          <hr className="hr-div-left"></hr>

          <div class="container">
            <div class="row row-dashboard">
              <Row>
                {data.map(isi => {
                  return <Image src={isi.Image} className="galeri-dalem" />;
                })}
              </Row>
            </div>
          </div>
        </div>
        <div id="div-right">
          <div className="swipe">
            <Deck />
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
