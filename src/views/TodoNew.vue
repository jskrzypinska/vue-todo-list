<template>
    <div>
      <input
        v-model="todo.title"
        placeholder="Add title"
        class="user-input"
      />
      <textarea
        name="todo"
        rows="5"
        v-model="todo.comment"
        placeholder="Add comment"
        class="user-textarea"
      ></textarea>
      <button @click="addTodo(todo)" class="add-btn">Add task</button>
    </div>
</template>

<script>
export default {
  name: "new-todo",
  data() {
    return {
      todo: {
        id: Date.now(),
        completed: "",
        title: "",
        comment: "",
      },
    };
  },
  methods: {
    addTodo() {
      this.$store.dispatch("addTodo", this.todo);
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss">
.user-input {
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  margin-bottom: 5px;
}
.user-textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
  font-family: inherit;
}
.add-btn {
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 16px;
  font-family: inherit;
  float: right;
  
}

</style>
