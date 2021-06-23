<template>
  <div>
    <div class="todo-item">
      <div class="todo-item-left">
        <input type="checkbox" v-model="completed" @change="doneEdit" />
        <div
          class="todo-item-label"
          :class="{ completed: completed }"
          @click="editTodo(todo)"
        >
        <router-link :to="{ name: 'edit-todo', params: { todoId: todo.id } }">
          {{ todo.title }}
        </router-link>
        </div>
      </div>
      <div class="remove-item" @click="removeTodo(todo.id)">
        &times;
      </div>
    </div>
    <p>{{ todo.comment }}</p>
  </div>
</template>

<script>
export default {
  name: "todo-item",
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
    checkAll: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      comment: this.todo.comment,
      editing: this.todo.editing
    };
  },
  watch: {
    checkAll() {
      if (this.checkAll) {
        this.completed = true;
      } else {
        this.completed = this.todo.completed;
      }
    },
  },
  methods: {
    removeTodo(todoId) {
      this.$store.dispatch("removeTodo", todoId);
    },
    editTodo(todo) {
        this.todo.editing = true
        this.$store.dispatch("editTodo", todo);
    },
    doneEdit() {
     this.$store.dispatch("finishEdit",  {
        index: this.index,
        todo: {
          id: this.id,
          title: this.title,
          completed: this.completed,
          comment: this.comment,
        },
      });
    
    },
  },

};
</script>

<style>
p {
  font-size: 16px;
  margin-left: 50px;
}
a {
    text-decoration: none;
    color: inherit;
}
</style>
