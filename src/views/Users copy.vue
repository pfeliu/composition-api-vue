<template>
  <h2 v-if="isLoading">Wait please...</h2>
  <h2 v-else>Users</h2>
  <h5 v-if="errorMessage">{{ errorMessage }}</h5>

  <div v-if="users.length > 0">
    <ul>
      <li v-for="user in users" :key="user.id">
        <h4>User name: {{ user.first_name }} {{ user.last_name }}</h4>
        <h6>{{ user.email }}</h6>
      </li>
    </ul>
  </div>

  <button @click="backPage">Back</button>
  <button @click="nextPage">Next</button>
  <span>Page: {{ currentPage }}</span>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  setup() {
    const users = ref([]);
    const isLoading = ref(false);
    const currentPage = ref(1);
    const errorMessage = ref();

    const getUsers = async (page = 1) => {
      if (page <= 0) page = 1;

      isLoading.value = true;

      const { data } = await axios.get(`https://reqres.in/api/users`, {
        params: {
          page,
        },
      });

      // console.log(data.data);

      if (data.data.length > 0) {
        users.value = data.data;
        currentPage.value = page;
        errorMessage.value = null
      } else if (currentPage.value > 0) {
        errorMessage.value = 'No exist more users';
      }

      isLoading.value = false;
    };

    getUsers();

    return {
      currentPage,
      errorMessage,
      isLoading,
      users,
      nextPage: () => getUsers(currentPage.value + 1),
      backPage: () => getUsers(currentPage.value - 1),
    };
  },
};
</script>

<style scoped>
h2 {
  text-align: center;
  width: 100%;
}

div {
  display: flex;
  justify-content: center;
  text-align: center;
}

ul {
  width: 250px;
}
</style>
