import { TASKS } from '@/constants'

export default {
  namespaced: true,
  state () {
    return {
      tasks: JSON.parse(localStorage.getItem(TASKS)) ?? []
    }
  },
  mutations: {
    add (state, task) {
      state.tasks.push(task)
      localStorage.setItem(TASKS, JSON.stringify(state.tasks))
    },
    change (state, id) {
      const task = state.tasks.find(t => t.id === id)
      setTimeout(() => {
        task.state = task.state === 'active' ? 'inactive' : 'active'
      }, 50)
    },
    remove (state, id) {
      state.tasks = state.tasks.filter(t => t.id !== id)
      localStorage.setItem(TASKS, JSON.stringify(state.tasks))
    },
    update (state, task) {
      const idx = state.tasks.findIndex(t => t.id === task.id)
      state.tasks[idx] = task
      localStorage.setItem(TASKS, JSON.stringify(state.tasks))
    }
  },
  actions: {
    remove ({ commit, rootGetters }, id) {
      const notes = rootGetters['notes/notes'].filter(n => n.taskID !== id)
      commit('notes/set', notes, { root: true })
      commit('remove', id)
    }
  },
  getters: {
    tasks: state => state.tasks.sort((a, b) => b.date - a.date),
    activeTasks: (_, getters) => getters.tasks.filter(t => t.state === 'active'),
    inActiveTasks: (_, getters) => getters.tasks.filter(t => t.state === 'inactive'),
    taskById: (_, getters) => id => getters.tasks.find(t => t.id === id)
  }
}
