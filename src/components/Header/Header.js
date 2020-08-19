import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Hyph } from "../Utils/Utils";
import TokenService from "../../services/token-service";
import IdleService from "../../services/idle-service";
import "./Header.css";

export default class Header extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    /* when logging out, clear the callbacks to the refresh api and idle auto logout */
    TokenService.clearCallbackBeforeExpiry();
    IdleService.unRegisterIdleResets();
  };

  renderLogoutLink() {
    return (
      <div className="Header__logged-in">
        <Link to="/newteam">New Team</Link>
        <Hyph />
        <Link onClick={this.handleLogoutClick} to="/">
          Logout
        </Link>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <div className="Header__not-logged-in">
        <Link to="/register">Register</Link>
        <Hyph />
        <Link to="/login">Sign in</Link>
      </div>
    );
  }

  render() {
    return (
      <>
        <nav className="Header">
          <h1>
            <Link to="/">
              <FontAwesomeIcon className="black" icon="futbol" /> Winning Eleven
            </Link>
          </h1>
          {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}
        </nav>
        <p className="landing-page">
          You got what it takes to make the best team in the world? <br></br>{" "}
          Play our soccer fantasy game in which users build an imaginary team of
          real life players.
        </p>
      </>
    );
  }
}
