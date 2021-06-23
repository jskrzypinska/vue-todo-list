import Vue from "vue";
import Vuex from "vuex";
import todos from "../data/todos";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos,
  },
  mutations: {
    editTodo(state, todo) {
      let updatedTodos = state.todos.filter((item) => item.id != todo.id);
      state.todos = updatedTodos;
      state.todos.push(todo);
    },
    finishEdit(state, todo) {
      state.todos.splice(todo.index, 1, todo.todo);
    },
    removeTodo(state, todoId) {
      let updatedTodos = state.todos.filter((item) => item.id != todoId);
      state.todos = updatedTodos;
    },
    clearCompleted(state) {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    editTodo({ commit }, todo) {
      commit("editTodo", todo);
    },
    finishEdit({ commit }, todo) {
      commit("finishEdit", todo);
    },
    removeTodo({ commit }, todoId) {
      commit("removeTodo", todoId);
    },
    clearCompleted({ commit }) {
      commit("clearCompleted");
    },
    addTodo({ commit }, todo) {
      commit("addTodo", todo);
    },
  },
  modules: {},
});
