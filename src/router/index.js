import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../components/TodoList.vue";
import TodoNew from "../views/TodoNew.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
  {
    path: "/new",
    name: "new-todo",
    component: TodoNew,
  },
];

const router = new VueRouter({
  routes,
  // mode: "history",
});

export default router;
