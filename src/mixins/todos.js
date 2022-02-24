export const todos = {
  created() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      try {
        await this.$store.dispatch("todos/getTodos");
      } catch (e) {
        console.log(e.message);
      }
    },
  },
  computed: {
    todos() {
      return this.$store.state.todos.todos;
    },
  },
};
