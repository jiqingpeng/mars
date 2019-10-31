import Vuex from 'vuex'
import Vue from 'vue'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    count: 2
  },
  mutations: {
    increment (state, n) {
      state.count += n.num
    }
  },
  getters: {
    count1: state => {
      return state.count + 1
    },
    count2: (state, getters) => {
      return getters.count1 + 1
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
export default store
