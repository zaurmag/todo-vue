<template>
  <div class="row g-0 pt-10">
    <div class="col-sm-10 offset-sm-2 ps-sm-30 ps-20">
      <button class="todo__toggle-inactive btn btn-primary btn-sm is-active" type="button">
        <svg class="icon icon-chevron-right">
          <use xlink:href="#chevron-right"></use>
        </svg>Завершенные<span class="todo__inactive-count">(5)</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppToggleBtn'
}
</script>

<style scoped>

</style>
