import { Component } from "react";
import logo from "./anita-jankovic-M7NajHCqZDM-unsplash.jpg";

class Header extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>Random Pictures with Random Advice</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p style={{ fontSize: "10px" }}>
          <a
            alt="fortune cookie by a coffee"
            href="https://unsplash.com/photos/M7NajHCqZDM?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink"
          >
            Anita Jankovic from Unsplash
          </a>
        </p>
        <p>It's like fortune cookies without the cookie</p>
      </div>
    );
  }
}
export default Header;
