import { createStore } from 'vuex'

export default createStore({
  state: {
    count:0,
  },
  getters: {
    getCount(state){
      return state.count
    }
  },
  mutations: {
    setCount(state,newValue){
      state.count += newValue
    }
  },
  actions: {
  },
  modules: {
  }
})
