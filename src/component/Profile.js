import React, { Component } from "react";
import { Button } from "react-bootstrap";
import "./profile.css";

export default class Profile extends Component {
  state = {
    show: false,
    count: 0,
  };

  toggle = () => {
    this.setState({ show: !this.state.show });
    this.setState({ count: (this.state.count = 0) });
  };

  componentDidMount() {
    const intervall = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
    }, 1000);

    return () => clearInterval(intervall);
  }

  render() {
    return (
      <div className="profile_container">
        <div className="pic">
          {this.state.show ? (
            <div>
              {this.props.children}
              {this.props.name}

              {this.state.count}
            </div>
          ) : null}

          <Button
            className="btn"
            variant="secondary"
            size="lg"
            onClick={this.toggle}
          >
            show
          </Button>
        </div>
      </div>
    );
  }
}
