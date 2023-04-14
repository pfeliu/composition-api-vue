import { useStore } from 'vuex';
import { computed, ref } from 'vue';

const useTodos = () => {
  const store = useStore();

  const currentTab = ref('all');

  /* const toggleTodo = (id) => {
            store.commit('toggleTodo', id)
        } */

  return {
    currentTab,
    pending: computed(() => store.getters['pendingTodos']),
    all: computed(() => store.getters['allTodos']),
    completed: computed(() => store.getters['completedTodos']),
    getTodosByTab: computed(() =>
      store.getters['getTodosByTab'](currentTab.value)
    ),
    toggleTodo: (id) => store.commit('toggleTodo', id),
    createTodo: (text) => store.commit('createTodo', text),
  };
};

export default useTodos;
