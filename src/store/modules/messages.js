// import shop from '../../api/shop'

// initial state
const state = {
  messages: [
    {
      type: "bot",
      value: "您好，我是学历咨询机器人，小智。您有什么问题呢？"
    }
  ]
}

// getters
const getters = {
  userMessages(state){
    return state.messages.filter(message => message.type === 'user');
  },
  botMessages(state){
    return state.messages.filter(message => message.type === 'bot');
  }
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}