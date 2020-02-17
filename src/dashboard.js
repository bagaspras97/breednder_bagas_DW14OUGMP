import React, { Component } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./dashboard.css";
import data from "./data.json";

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
        <div className="div-right">
          <img className="card" src={require("./gambar-profile.jpg")} />
          <div>
            <img
              className="card1 card0"
              src={require("./img/gambar-refresh.png")}
            />
            <img className="card1" src={require("./img/gambar-unlove.png")} />
            <img className="card1" src={require("./img/gambar-love.png")} />
            <img className="card1" src={require("./img/gambar-thunder.png")} />
          </div>
          <div>
            <img className="img-footer-1" src={require("./img/arrow.png")} />
            <div className="img-footer-1-ket">NO</div>
            <img className="img-footer-2" src={require("./img/arrow.png")} />
            <div className="img-footer-2-ket">YES</div>
            <img className="img-footer-3" src={require("./img/arrow.png")} />
            <div className="img-footer-3-ket">OPEN PROFILE</div>
            <img className="img-footer-4" src={require("./img/arrow.png")} />
            <div className="img-footer-4-ket">CLOSE PROFILE</div>
          </div>
        </div>
      </>
    );
  }
}

export default Dashboard;
