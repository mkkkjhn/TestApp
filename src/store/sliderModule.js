export const sliderModule = {
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
        newUser: {
            name: '',
            avatar: '',
        },
    }),
    getters: {
        SELECT_USER(state) {
            return state.users.find((user, index) => {
                return index === state.activeUser
            })
        },
    },
    mutations: {
        NEXT_USER(state) {
            if (state.activeUser !== (state.users.length - 1)) {
                state.activeUser += 1
            }
        },
        PREV_USER(state) {
            if (state.activeUser !== 0) {
                state.activeUser -= 1
            }
        },
        SAVE_NEW_USER_NAME(state, payload) {
            state.newUser.name = payload
        },
        SAVE_NEW_USER_AVATAR(state, payload) {
            state.newUser.avatar = payload
        },
        ADD_NEW_USER(state) {
            state.users.unshift(state.newUser)
            state.activeUser = 0
        },
    },
    actions: {
        NEXT_USER(context) {
            context.commit('NEXT_USER')
        },
        PREV_USER(context) {
            context.commit('PREV_USER')
        },
        SAVE_NEW_USER_NAME(context, data) {
            context.commit('SAVE_NEW_USER_NAME', data)
        },
        SAVE_NEW_USER_AVATAR(context, data) {
            context.commit('SAVE_NEW_USER_AVATAR', data)
        },
        ADD_NEW_USER(context) {
            context.commit('ADD_NEW_USER')
        }
    }
}