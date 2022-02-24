import { createStore } from "vuex";
import { users } from "./users/users";
import { todos } from "./todos/todos";

const store = createStore({
  modules: {
    users: users,
    todos: todos,
  },
});

export default store;
