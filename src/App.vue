<template>
  <app-page title="Список задач">
    <div id="toDo" class="todo">
      <app-header :count="tasks.length"/>

      <main class="todo__body">
        <div class="tasks">
          <app-tasks
            v-if="tasksActive.length"
            :tasks="tasksActive"
            @click="toggleSidebar"
          />

          <div class="row todo__no-tasks" v-else>
            <div class="col-10 offset-2">
              <p>У вас нет активных задач.</p>
            </div>
          </div>

          <app-toggle-btn
            v-if="tasksInactive.length"
            :count="tasksInactive.length"
            :show="toggleInactive"
            @toggle="toggleInactive = !toggleInactive"
          />

          <app-tasks
            v-if="toggleInactive"
            :tasks="tasksInactive"
            @click="toggleSidebar"
          />
        </div>

        <Transition name="slide-right">
          <the-sidebar :id="openTaskID" />
        </Transition>
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
    const toggleInactive = ref(false)
    const tasks = computed(() => store.getters['task/tasks'])
    const openTaskID = ref()

    const toggleSidebar = ({ id }) => {
      openTaskID.value = id
      store.commit('sidebar/open', id)
    }

    return {
      tasks,
      tasksActive: computed(() => store.getters['task/activeTasks']),
      tasksInactive: computed(() => store.getters['task/inActiveTasks']),
      toggleInactive,
      toggleSidebar,
      openTaskID
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

<style lang="scss">
#app {
  height: 100%;
}
</style>
