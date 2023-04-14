<template>
  <h1>Counter View</h1>
  <h3>{{ counter }}</h3>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</template>

<script>
import useCounter from '@/composables/useCounter';
import { ref } from 'vue';

export default {
  name: 'Counter',
  props: {},
  emits: [],
  setup() {
    //     const counter  = ref(5)

    //     const increment = () => {
    //         counter.value++
    //     }

    //    /*  const decrement = () => {
    //         counter.value--
    //     } */

    //     return {
    //         counter, increment, decrement: () => counter.value--
    //     }

    const { counter, increment, decrement } = useCounter();

    return {
      counter,
      increment,
      decrement,
    };
  },
};
</script>

<style></style>
