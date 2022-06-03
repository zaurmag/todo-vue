<template>
  <div class="checkbox" :class="classList">
    <input
      class="checkbox__input"
      :id="task.id"
      :checked="task.state === 'inactive'"
      type="checkbox"
      @change="$emit('change', task.id)"
    >
    <label class="checkbox__label" :for="task.id"></label>
  </div>
</template>

<script>
export default {
  name: 'AppCheckbox',
  props: {
    task: {
      type: Object,
      required: true
    },
    classList: {
      type: Array,
      required: false
    }
  },
  emits: ['change']
}
</script>

<style scoped>

</style>
