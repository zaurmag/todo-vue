import { NOTES } from '@/constants'

export default {
  namespaced: true,
  state () {
    return {
      notes: JSON.parse(localStorage.getItem(NOTES)) ?? []
    }
  },
  mutations: {
    set (state, notes) {
      state.notes = notes
      localStorage.setItem(NOTES, JSON.stringify(state.notes))
    },
    add (state, note) {
      state.notes.push(note)
      localStorage.setItem(NOTES, JSON.stringify(state.notes))
    },
    remove (state, id) {
      state.notes = state.notes.filter(n => n.id !== id)
      localStorage.setItem(NOTES, JSON.stringify(state.notes))
    }
  },
  getters: {
    notes: state => state.notes,
    notesByTaskID: (_, getters) => id => getters.notes.filter(n => n.taskID === id)
  }
}
