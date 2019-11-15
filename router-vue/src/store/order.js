let state = {
  lists: [1, 2, 3, 4, 5, 6],
  name: 'hahaha'
}

let mutations = {
  gbLists (state, data) {
    state.lists = data.lists
    state.name = data.name
  }
}

let actions = {}

let getters = {}

export default {
  state,
  mutations,
  actions,
  getters,
  // 命名空间  设置这个模块中的所有属性私有化（让其属于order下面的模块）
  namespaced: true
}
