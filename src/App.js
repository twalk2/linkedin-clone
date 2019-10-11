import React, { Component } from "react";
import logo from "./images/linkedin-logo-small.png";
import blacklogo from "./images/linkedin-black-logo.png";
import "./App.css";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      isToggleOn: true
    };
  }

  PasswordChanger = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  };

  render() {
    return (
      <div className="App">
        <div className="header-border"></div>
        <div className="header">
          <img src={logo} alt="logo" />
        </div>
        <div className="welcome">
          <h1>Welcome Back</h1>
          <p>
            Don't miss your next opportunity. Sign in to stay updated on your
            professional world.
          </p>
        </div>
        <form>
          <div className="input-wrapper">
            <input type="text" required />
            <span class="floating-label">Email or Phone</span>
          </div>
          <div className="input-wrapper">
            <input
              type={this.state.isToggleOn ? "password" : "text"}
              required
            />
            <span className="floating-label">Password</span>
            <button
              type="button"
              className="show-button"
              onClick={this.PasswordChanger}
            >
              {this.state.isToggleOn ? "Show" : "Hide"}
            </button>
          </div>
          <button type="submit">Sign in</button>
        </form>
        <div className="help">
          <a href="#" id="forgot" className="help-links">
            Forgot password?
          </a>
          <p>
            New to LinkedIn?{" "}
            <a href="#" id="join" className="help-links">
              Join now
            </a>
          </p>
        </div>
        <div className="footer">
          <div className="footer-left-side">
            <img src={blacklogo} alt="black logo" />
            &copy; 2019
          </div>
          <a href="#">User Agreement</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Community Guidelines</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Copyright Policy</a>
          <a href="#">Send Feedback</a>
        </div>
      </div>
    );
  }
}

// App.js page
