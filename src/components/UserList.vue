<template>
  <ul>
    <!-- <li v-for="user in users" :key="user.id">
      <h4>User name: {{ user.first_name }} {{ user.last_name }}</h4>
        <h6>{{ user.email }}</h6>
      <h5>HelloWorld</h5>
    </li> -->
    <slot v-for="user in users" :user="user" :key="user.id"></slot>
  </ul>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
ul {
  list-style: none;
}
</style>
