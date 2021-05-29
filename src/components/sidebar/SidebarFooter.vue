<template>
  <footer class="sidebar__footer">
    <time class="sidebar__date">Создано: {{ dateFormat(date) }}</time>
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
import { dateFormat } from '../../utils/date'

export default {
  name: 'SidebarFooter',
  props: ['date'],
  emits: ['remove'],
  setup () {
    return {
      dateFormat
    }
  }
}
</script>

<style scoped>

</style>
