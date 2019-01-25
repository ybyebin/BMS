import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoginModel:false,// 是否登陆模块
    currentPage:'',//当前页面
    user:{
        isLogin:true
    }
  }, 
  mutations: {
    setIsLoginModel(state, data){
        state.isLoginModel = data;
    },
    setUser(state, data){
        state.user = JSON.parse(data)
    },
    setCurrentPage(state, data){
        state.currentPage = data;
    }
  }
})
