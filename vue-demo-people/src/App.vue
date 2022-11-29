<script>
import "bootstrap/dist/css/bootstrap.min.css";
import PersonCard from "./components/PersonCard.vue";

export default {
  components: {
    PersonCard,
  },
  data() {
    return {
      people: [
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
      ],
      person: {
        name: "",
        email: "",
        age: 0,
      },
    };
  },
  methods: {
    add_person(e) {
      e.preventDefault();
      this.people.push(this.person);
      this.person = {
        name: "",
        email: "",
        age: 0,
      };
    },
  },
};
</script>

<template>
  <main class="container">
    <form class="mt-3" @submit="add_person">
      <div class="mb-3">
        <label for="name_input">Name</label>
        <input
          class="form-control"
          type="text"
          id="name_input"
          placeholder="Name"
          required
          v-model="person.name"
        />
      </div>
      <div class="mb-3">
        <label for="email_input">Email</label>
        <input
          class="form-control"
          type="email"
          id="email_input"
          placeholder="Email"
          required
          v-model="person.email"
        />
      </div>
      <div class="mb-3">
        <label for="age_input">Age</label>
        <input
          class="form-control"
          type="number"
          id="age_input"
          placeholder="Age"
          required
          v-model="person.age"
        />
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
    <section class="row mt-4 gy-3">
      <PersonCard v-for="person in people" :person="person" :key="person" />
    </section>
  </main>
</template>
