import { createStore } from 'vuex'
const TASKS = 'tasks'

export default createStore({
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
      const idx = state.tasks.findIndex(t => t.id === id)
      state.tasks.splice(idx, 1)
      localStorage.setItem(TASKS, JSON.stringify(state.tasks))
    },
    update (state, task) {
      const idx = state.tasks.findIndex(t => t.id === task.id)
      state.tasks[idx] = task
      localStorage.setItem(TASKS, JSON.stringify(state.tasks))
    },
    toggleTask (state, { id, value }) {
      console.log(id)
      const idx = state.tasks.findIndex(t => t.id === id)

      if (idx >= 0) {
        state.tasks.forEach(task => {
          task.isOpen = false
        })
        state.tasks[idx].isOpen = value
        localStorage.setItem(TASKS, JSON.stringify(state.tasks))
      }
    },
    addNote (state, note) {
      const task = state.tasks.find(t => t.id === note.taskID)
      task.notes.push(note)
      localStorage.setItem(TASKS, JSON.stringify(state.tasks))
    },
    removeNote (state, { taskID, id }) {
      const notes = state.tasks.find(t => t.id === taskID).notes
      const index = notes.findIndex(n => n.id === id)
      notes.splice(index, 1)
      localStorage.setItem(TASKS, JSON.stringify(state.tasks))
    }
  },
  getters: {
    tasks: state => state.tasks.sort((a, b) => b.date - a.date),
    activeTasks: (_, getters) => getters.tasks.filter(t => t.state === 'active'),
    inActiveTasks: (_, getters) => getters.tasks.filter(t => t.state === 'inactive'),
    taskById: (_, getters) => id => getters.tasks.find(t => t.id === id),
    openTask: (_, getters) => getters.tasks.find(t => t.isOpen === true)
  }
})
