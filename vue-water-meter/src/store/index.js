import { createStore } from 'vuex'

const store = createStore({
    state: {
        newReq: true,
        getData: false,
        userData: {}
    },
    mutations: {
        setNewReq(state, payload) {
            state.newReq = payload
        },
        setNewUserData(state, payload) {
            state.userData = payload
        },
        setGetData(state, payload) {
            state.getData = payload
        }
    }
})

export default store