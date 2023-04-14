import { ref } from 'vue';

const useCounter = () => {
  const counter = ref(5);

  const increment = () => {
    counter.value++;
  };

  /*  const decrement = () => {
            counter.value--
        } */

  return {
    counter,
    increment,
    decrement: () => counter.value--,
  };
};

export default useCounter;
