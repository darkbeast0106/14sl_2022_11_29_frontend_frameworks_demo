import React, { Component } from "react";

class PersonCard extends Component {
  render() {
    const { person } = this.props;
    return (
      <div className="col-md-4">
        <div className="card">
          <div className="card-header">{person.name}</div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> {person.email} </li>
            <li className="list-group-item"> {person.age} </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default PersonCard;
