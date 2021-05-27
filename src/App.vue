<template>
  <app-page title="Список задач">
    <div class="todo">
      <app-header />

      <main class="todo__body">
        <form action="#">
          <div class="tasks">
            <app-tasks :task="{}" />
            <app-toggle-btn />
            <app-tasks-inactive />
          </div>
        </form>

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
import AppTasksInactive from './components/AppTasksInactive'
import AppToggleBtn from './components/AppToggleBtn'
import TheSidebar from './components/TheSidebar'
import AppFooter from './components/AppFooter'

export default {
  name: 'App',
  setup () {

  },
  components: {
    AppPage,
    AppTasks,
    AppTasksInactive,
    AppToggleBtn,
    TheSidebar,
    AppHeader,
    AppFooter
  }
}
</script>
