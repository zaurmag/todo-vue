import { createStore } from 'vuex'

export default createStore({
  state () {
    return {
      tasks: []
    }
  },
  mutations: {
    setTasks (state, tasks) {
      state.tasks = tasks
    },
    addTask (state, task) {
      state.tasks.push(task)
    },
    changeState (state, id) {
      const task = state.tasks.find(t => t.id === id)
      task.state = task.state === 'active' ? 'inactive' : 'active'
    }
  },
  actions: {
    loadOne ({ state }, id) {
      return state.tasks.find(t => t.id === id)
    },
    remove ({ state, commit }, id) {
      const tasks = state.tasks.filter(t => t.id !== id)
      commit('setTasks', tasks)
    }
  },
  getters: {
    tasksActive: state => state.tasks.filter(t => t.state === 'active'),
    tasksInActive: state => state.tasks.filter(t => t.state === 'inactive')
  }
})
