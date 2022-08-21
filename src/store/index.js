import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    arr: [1,2,3,4,5,6,7,8,9],
  },
  getters: {
    totalCount (state) {
      return state.arr.filter(item=> item > 5)
    },
    // 可以使用getters作为参数
    filterTotalCount (state,getters) {
      return getters.totalCount.reduce((prev,item)=>{
        return prev + item
      },0)
    }
  },
  // mutations必须是同步函数
  mutations: {
    setCount (state,count) {
      state.count = count;
    }
  },
  modules: {

  },
})
