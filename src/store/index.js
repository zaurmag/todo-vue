import { createStore } from 'vuex'
import task from './modules/task.module'
import notes from './modules/notes.module'
import sidebar from './modules/sidebar.module'

export default createStore({
  modules: {
    task,
    notes,
    sidebar
  }
})
