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
    change (state, id) {
      const task = state.tasks.find(t => t.id === id)
      setTimeout(() => {
        task.state = task.state === 'active' ? 'inactive' : 'active'
      }, 50)
    },
    addNote (state, note) {
      const task = state.tasks.find(t => t.id === note.taskID)
      task.notes.push(note)
    },
    setNotes (state, { id, notes }) {
      const task = state.tasks.find(t => t.id === id)
      task.notes = notes
    }
  },
  actions: {
    loadOne ({ state }, id) {
      return state.tasks.find(t => t.id === id)
    },
    remove ({ state, commit }, id) {
      const tasks = state.tasks.filter(t => t.id !== id)
      commit('setTasks', tasks)
    },
    removeNote ({ getters, commit }, { taskID, id }) {
      const notes = getters.taskNotes(taskID).filter(n => n.id !== id)
      commit('setNotes', {
        id: taskID,
        notes
      })
    }
  },
  getters: {
    tasksAll: state => state.tasks,
    tasksActive: state => state.tasks.filter(t => t.state === 'active'),
    tasksInActive: state => state.tasks.filter(t => t.state === 'inactive'),
    taskNotes: (_, getters) => id => getters.tasksAll.find(t => t.id === id)?.notes
  }
})
