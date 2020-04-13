import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:[],
    cart:[],
    productCount:''
  },
  mutations: {
    setUser: (state,payload) => state.user = payload,
    removeUser:(state) => state.user = '',
    addtocart:(state,payload) => state.cart.unshift(payload),
    removeItem: (state,id) => {
     
        var idx = state.cart.indexOf(id);
        if (idx !== -1) {
            state.cart.splice(idx, 1);
        }
       
    }
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
