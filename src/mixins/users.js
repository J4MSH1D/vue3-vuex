export const users = {
    created() {
        this.getUsers()
    },
    methods: {
        async getUsers(){
            try {
                await this.$store.dispatch("users/getUsers")
            } catch (e) {
                console.log(e.message);
            }
        }
    },
    computed: {
        users(){
            return this.$store.state.users.users
        }
    }
}