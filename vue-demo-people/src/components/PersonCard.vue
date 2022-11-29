<template>
  <div class="col-md-4">
    <div class="card">
      <div class="card-header">{{ person.name }}</div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item">{{ person.email }}</li>
        <li class="list-group-item">{{ person.age }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    person: Object,
  },
};
</script>
