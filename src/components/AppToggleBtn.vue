<template>
  <div class="row g-0 pt-10">
    <div class="col-sm-10 offset-sm-2">
      <button
        class="todo__toggle-inactive btn btn-primary btn-sm"
        :class="{'is-active': show}"
        type="button"
        @click="$emit('toggle')"
      >
        <svg class="icon icon-chevron-right">
          <use xlink:href="#chevron-right"></use>
        </svg>Завершенные<span class="todo__inactive-count">({{ count }})</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['toggle'],
  props: ['show', 'count'],
  name: 'AppToggleBtn'
}
</script>

<style scoped>

</style>
