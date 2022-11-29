import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PersonCard from './PersonCard';

class App extends Component {
  state = {
    people: [{
      name: "Gipsz Jakab",
      email: "gipsz@example.com",
      age: 42,
    },
    {
      name: "Gipsz Jakab",
      email: "gipsz@example.com",
      age: 42,
    },
    {
      name: "Gipsz Jakab",
      email: "gipsz@example.com",
      age: 42,
    },
    {
      name: "Gipsz Jakab",
      email: "gipsz@example.com",
      age: 42,
    },
    {
      name: "Gipsz Jakab",
      email: "gipsz@example.com",
      age: 42,
    }],
    person: {
      name: "",
      email: "",
      age: 0,
    }
  };

  render() {
    const { people, person } = this.state;
    const cardList = [];
    people.forEach((person) => {
      cardList.push(<PersonCard person={person} key={person} />);
    });

    return (
      <main className="container">
        <form className="mt-1" onSubmit={(e) => this.add_person(e)}>
          <h2>Add new person</h2>
          <div className="mb-3">
            <label htmlFor="name_input">Name</label>
            <input
              className="form-control"
              type="text"
              id="name_input"
              placeholder="Name"
              required
              value={person.name}
              onInput={(event) => this.setPersonName(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email_input">Email</label>
            <input
              className="form-control"
              type="email"
              id="email_input"
              placeholder="Email"
              required
              value={person.email}
              onInput={(event) => this.setPersonEmail(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="age_input">Age</label>
            <input
              className="form-control"
              type="number"
              id="age_input"
              placeholder="Age"
              required
              value={person.age}
              onInput={(event) => this.setPersonAge(event.target.value)}
            />
          </div>
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </form>
        <section className="row mt-3 gy-3">{cardList}</section>
      </main>
    );
  }

  add_person = (e) => {
    e.preventDefault();
    const { people, person } = this.state;
    const newPeople = [];
    people.forEach(p1 => {
      newPeople.push(p1);
    });
    newPeople.push(person);
    this.setState({people: newPeople});
  }

  setPersonName = (value) => {
    const { person } = this.state;
    this.setState({person: {
      name: value,
      email: person.email,
      age: person.age,
    }});
  }

  setPersonEmail = (value) => {
    const { person } = this.state;
    this.setState({person: {
      name: person.name,
      email: value,
      age: person.age,
    }});
  }

  setPersonAge = (value) => {
    const { person } = this.state;
    this.setState({person: {
      name: person.name,
      email: person.email,
      age: value,
    }});
  }

}

export default App;
