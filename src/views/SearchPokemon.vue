<template>
  <h1>Search pokémon: {{ pokemonId }}</h1>
  <form @submit.prevent="onSubmit">
    <input type="number" placeholder="Pókemon number" v-model="pokemonId" ref="txtSearchId"/>
  </form>
  <br />
  <span>Press enter for search</span>
</template>

<script>
import { ref, onActivated} from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {

    const router = useRouter()
    const pokemonId = ref(1);
    const txtSearchId = ref()

    onActivated(() => {
        // ztxtSearchId.value.focus()
        txtSearchId.value.select()
    })

    return {
      pokemonId,
      txtSearchId,
      onSubmit: () => {
        // console.log('Pokeon searching...', pokemonId.value)
        router.push({name: 'pokemon-id', params: {
            id: pokemonId.value
        }})
      }
    };
  },
};
</script>

<style></style>
