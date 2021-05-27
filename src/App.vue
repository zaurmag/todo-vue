<template>
  <app-page title="Список задач">
    <div class="todo">
      <app-header />

      <main class="todo__body">
        <div class="tasks">
          <div class="tasks__active" v-if="tasks.length">
            <app-tasks :tasks="tasks" />
          </div>

          <div class="row todo__notasks" v-else>
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

          <div class="tasks__inactive" v-if="showInactive">
            <app-tasks :tasks="tasksInactive" />
          </div>
        </div>

        <the-sidebar />
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
    const tasks = computed(() => store.getters.tasksActive)
    const tasksInactive = computed(() => store.getters.tasksInActive)
    const showInactive = ref(false)

    return {
      tasks,
      tasksInactive,
      showInactive
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
