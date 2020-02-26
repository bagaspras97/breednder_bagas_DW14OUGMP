import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "./EditProfile.css";

class EditProfile extends Component {
  render() {
    return (
      <>
        <div className="div-left-edit">
          <nav className="nav-left-profile">
            <Link to="./profile">
              <img
                className="img"
                src={require("./img/white-transparent-arrow.png")}
              />
            </Link>
            <img className="img1" src={require("./gambar-profile.jpg")} />
            <h3 className="edit-profile">Edit Profile Pet</h3>
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
        <div className="div-right-edit">
          <div className="card-edit">
            <div class="container-edit ">
              <div class="row row-edit-right">
                <div className="edit-photo-1">
                  <img className="img1" src={require("./gambar-profile.jpg")} />
                  <img className="img2" src={require("./img/add.png")} />
                </div>
                <div className="edit-photo-2">
                  <img className="img2" src={require("./img/add.png")} />
                </div>
                <div className="edit-photo-3">
                  <img className="img2" src={require("./img/add.png")} />
                </div>
                <div className="edit-photo-4">
                  <img className="img2" src={require("./img/add.png")} />
                </div>
                <div className="edit-photo-5">
                  <img className="img2" src={require("./img/add.png")} />
                </div>
                <div className="edit-photo-6">
                  <img className="img2" src={require("./img/add.png")} />
                </div>

                <div className="edit-photo-7">
                  <img className="img2" src={require("./img/add.png")} />
                </div>
                <div className="edit-photo-8">
                  <img className="img2" src={require("./img/add.png")} />
                </div>
                <div className="edit-photo-9">
                  <img className="img2" src={require("./img/add.png")} />
                </div>
              </div>
              <div className="div-bawah">
                <div className="nama-edit">Name Pet</div>

                <input
                  className="input-form-edit1"
                  type="text"
                  placeholder="Garaga"
                />

                <div className="nama-edit">Breeder</div>

                <input
                  className="input-form-edit2"
                  type="text"
                  placeholder="Joko"
                />

                <div className="nama-edit">Gender</div>
                <input
                  className="input-form-edit3"
                  type="text"
                  placeholder="Male"
                />
                <div className="nama-edit">Age</div>
                <input
                  className="input-form-edit3"
                  type="text"
                  placeholder="2"
                />
                <div className="nama-edit">About Pet</div>
                <textarea className="input-form-edit4">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </textarea>
              </div>
            </div>
          </div>

          <Link to="/Profile">
            <Button className="btn-save" variant="warning">
              Save
            </Button>
          </Link>
        </div>
      </>
    );
  }
}

export default EditProfile;
