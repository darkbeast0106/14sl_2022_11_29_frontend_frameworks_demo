import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import PersonCard from "./PersonCard";

function App() {
  const [people, setPeople] = useState([
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
    },
    {
      name: "Gipsz Jakab",
      email: "gipsz@example.com",
      age: 42,
    },
  ]);
  const [person, setPerson] = useState({
    name: "",
    email: "",
    age: 0,
  });

  console.log(people);
  const cardList = [];
  people.forEach((person) => {
    cardList.push(<PersonCard person={person} key={person} />);
  });

  const add_person = (e) => {
    e.preventDefault();
    const peopleValue = [];
    people.forEach(personItem => {
      peopleValue.push(personItem);
    });
    peopleValue.push(person);
    setPeople(peopleValue);
  };

  const setPersonName = (name) => {
    setPerson({
      name: name,
      email: person.email,
      age: person.age,
    });
  };
  const setPersonEmail = (email) => {
    setPerson({
      name: person.name,
      email: email,
      age: person.age,
    });
  };
  const setPersonAge = (age) => {
    setPerson({
      name: person.name,
      email: person.email,
      age: age,
    });
  };

  return (
    <main className="container">
      <form className="mt-1" onSubmit={(e) => add_person(e)}>
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
            onInput={(event) => setPersonName(event.target.value)}
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
            onInput={(event) => setPersonEmail(event.target.value)}
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
            onInput={(event) => setPersonAge(event.target.value)}
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

export default App;
