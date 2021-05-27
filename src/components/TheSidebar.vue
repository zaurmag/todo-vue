<template>
  <!-- Add .is-active is show-->
  <aside class="sidebar">
    <button class="btn sidebar__close" type="button">
      <svg class="icon icon-x-lg">
        <use xlink:href="#x-lg"></use>
      </svg>
    </button>
    <header class="sidebar__task-header">
      <div class="checkbox sidebar__checkbox">
        <input class="checkbox__input" id="sbTask" type="checkbox">
        <label class="checkbox__label" for="sbTask"></label>
      </div>
      <h2 class="h5 sidebar__task-tlt">Сходить в магазин</h2>
    </header>

    <SidebarNote />
  </aside>
</template>

<script>
import SidebarNote from './sidebar/SidebarNote'

export default {
  name: 'TheSidebar',
  components: {
    SidebarNote
  }
}
</script>

<style scoped>

</style>
