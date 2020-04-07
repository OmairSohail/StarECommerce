import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[]
  },
  mutations: {
    setUser: (state,payload) => state.user = payload,
    removeUser:(state) => state.user = ''
  },
  actions: {
    createUser({commit},payload){
       this.commit('setUser',payload)
    },
    deleteUser({commit}){
       this.commit('removeUser')
    }
  },
  modules: {
  }
})
