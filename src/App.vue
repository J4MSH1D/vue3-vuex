<template>
  <Navbar />
</template>

<script>
  import Navbar from "./components/Navbar.vue";
  import { users } from "./mixins/users";
  import { todos } from "./mixins/todos";
  export default {
    name: "App",
    components: {
      Navbar,
    },
    mixins: [users, todos],
  };
</script>
