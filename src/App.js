import { Button } from "react-bootstrap";
import { Component } from "react";
import "./App.css";
import Profile from "./component/Profile";
import Image from "./me.jpg";

export default class App extends Component {
  name = "Ahmed";

  // const handelName = (name) => {
  //   alert(`Hello ${name}`);
  // };

  render() {
    return (
      <div className="content">
        <Profile name={this.name}>
          <img
            src={Image}
            alt="my pic"
            style={{ width: "250px", borderRadius: "50%" }}
          />
        </Profile>
      </div>
    );
  }
}
