import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid';

export default createStore({
  state: {
    todos: [
      {
        id: '1',
        text: 'AAA',
        completed: true,
      },
      {
        id: '2',
        text: 'BBB',
        completed: false,
      },
      {
        id: '3',
        text: 'CCC',
        completed: false,
      },
      {
        id: '4',
        text: 'DDD',
        completed: true,
      },
      {
        id: '5',
        text: 'EEE',
        completed: false,
      },
    ],
  },
  getters: {
    pendingTodos(state, getters, rootState) {
      return state.todos.filter((t) => !t.completed);
    },
    allTodos(state, getters, rootState) {
      return state.todos;
    },
    completedTodos(state, getters, rootState) {
      return state.todos.filter((t) => t.completed);
    },
    getTodosByTab: (_, getters) => (tab) => {
      switch (tab) {
        case 'all':
          return getters.allTodos;
        case 'pending':
          return getters.pendingTodos;
        case 'completed':
          return getters.completedTodos;
      }
    },
  },
  mutations: {
    toggleTodo(state, id) {
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);

      state.todos[todoIdx].completed = !state.todos[todoIdx.completed];
    },
    createTodo(state, text = '') {
      if (text.length <= 1) return;

      state.todos.push({
        id: uuidv4(),
        text,
        completed: false,
      });
    },
  },
  actions: {},
  modules: {},
});
