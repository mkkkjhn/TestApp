export const usersModule = {
    state: () => ({
        users: [
            {
                name: 'Oliver',
                avatar: 'https://images.unsplash.com/photo-1611915387288-fd8d2f5f928b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            },
            {
                name: 'Simba',
                avatar: 'https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            },
            {
                name: 'Loki',
                avatar: 'https://images.unsplash.com/photo-1586289883499-f11d28aaf52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60'
            },
        ],
        activeUser: 0,
    }),
    getters: {
        SELECT_USER(state) {
            return state.users.find((user, index) => {
                return index === state.activeUser
            })
        },
    },
    mutations: {
        SET_USERS(state, users) {
            state.users = users;
        },
        setActiveUser(state, activeUser) {
            state.activeUser = activeUser;
        }
    },
    actions: {

    }
}