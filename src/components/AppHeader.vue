<template>
  <header class="todo__header">
    <h2 class="todo__title">Список задач ({{ count }})</h2>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  props: ['count']
}
</script>

<style scoped>
  .todo__header {
    flex-shrink: 0;
  }
</style>
