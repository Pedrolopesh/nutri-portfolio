import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    postData:'',
    postStep:1
  },
  getters:{
    postData: state => state.postData,
    postStep: state => state.postStep,
  },
  mutations: {
    setPostData(state, data){
      state.postData = data
    },
    
    setPostStep(state, data){
      state.postStep = data
    }
  },
  actions: {
    changePostData(context, newData){
      localStorage.setItem('postData', JSON.stringify(newData));
      context.commit('setPostData', newData)
    },
    
    changePostStep(context, newData){
      context.commit('setPostStep', newData)
    }
  },
  modules: {
  }
})
