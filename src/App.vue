<template>
  <app-page title="Список задач">
    <div class="todo">
      <app-header />

      <main class="todo__body">
        <div class="tasks">
          <app-tasks
            v-if="tasks.length"
            :tasks="tasks"
            @click="openSB"
          />

          <div class="row todo__no-tasks" v-else>
            <div class="col-10 offset-2">
              <p>У вас нет активных задач.</p>
            </div>
          </div>

          <app-toggle-btn
            v-if="tasksInactive.length"
            :count="tasksInactive.length"
            :show="showInactive"
            @toggle="showInactive = !showInactive"
          />

          <app-tasks
            v-if="showInactive"
            :tasks="tasksInactive"
            @click="openSB"
          />
        </div>

        <the-sidebar
          v-if="oneTask"
          :task="oneTask"
          :isVisible="sidebar"
          @close="closeSB"
        />
      </main>

      <app-footer />
    </div>
  </app-page>
</template>

<script>
import AppPage from './components/ui/AppPage'
import AppHeader from './components/AppHeader'
import AppTasks from './components/AppTasks'
import AppToggleBtn from './components/AppToggleBtn'
import TheSidebar from './components/TheSidebar'
import AppFooter from './components/AppFooter'

import { useStore } from 'vuex'
import { computed, ref } from 'vue'

export default {
  name: 'App',
  setup () {
    const store = useStore()
    const showInactive = ref(false)
    const sidebar = ref(false)
    const oneTask = ref()

    const openSB = async id => {
      try {
        oneTask.value = await store.dispatch('loadOne', id)
        sidebar.value = true
      } catch (e) {
        console.error(e.message)
      }
    }

    return {
      tasks: computed(() => store.getters.tasksActive),
      tasksInactive: computed(() => store.getters.tasksInActive),
      showInactive,
      openSB,
      closeSB: value => {
        if (value) {
          sidebar.value = false
        } else {
          sidebar.value = value
        }
        // value ? sidebar.value = false : sidebar.value = value
      },
      oneTask,
      sidebar
    }
  },
  components: {
    AppPage,
    AppTasks,
    AppToggleBtn,
    TheSidebar,
    AppHeader,
    AppFooter
  }
}
</script>

<style>
  #app {
    height: 100%;
  }
</style>
