// import shop from '../../api/shop'

// initial state
const state = {
  messagesPool: [{
      type: "bot",
      value: "您好，我是学历咨询机器人，小智。您有什么问题呢？"
    },
    {
      type: "bot",
      value: "请输入您的问题"
    }
  ]
}

// getters
const getters = {
  userMessages(state) {
    return state.messagesPool.filter(message => message.type === 'user');
  },
  botMessages(state) {
    return state.messagesPool.filter(message => message.type === 'bot');
  }
}

// actions
const actions = {
  sendMessageToUser({
    state,
    commit
  }, message) {
    commit('addMessage', message);
  },
  sendMessageToBot({
    state,
    commit
  }, message) {
    commit('addMessage', message);
  }
}

// mutations
const mutations = {
  addMessage(state, message) {
    console.log('mutations.addMessage',message);
    state.messagesPool.push(message);
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}