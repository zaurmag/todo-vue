import { createStore } from 'vuex'
import task from './modules/task.module'
import notes from './modules/notes.module'

export default createStore({
  state () {
    return {

    }
  },
  mutations: {

  },
  modules: {
    task,
    notes
  }
})
