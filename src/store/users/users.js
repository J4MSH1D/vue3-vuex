import axios from "axios"

export const users = {
    namespaced: true,
    state: () => {
        return {
            users: null
        }
    },
    mutations: {
        setUsers: (state, payload) => state.users = payload
    },
    actions: {
        async getUsers(context) {
            try {
                const res = await axios.get("users")
                context.commit("setUsers", res.data)
            } catch (e) {
                console.log(e.message)
            }
        }
    }
}