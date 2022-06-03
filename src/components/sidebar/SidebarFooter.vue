<template>
  <footer class="sidebar__footer">
    <time class="sidebar__date">Создано: {{ $dateF(date, { month: 'long' }) }}</time>
    <div class="sidebar__remove">
      <a class="sidebar__remove-link" href="#" @click="$emit('remove')">
        <svg class="icon icon-trash">
          <use xlink:href="#trash"></use>
        </svg>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'SidebarFooter',
  props: ['date'],
  emits: ['remove']
}
</script>

<style scoped>

</style>
