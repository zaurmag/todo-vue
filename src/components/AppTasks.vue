<template>
  <div class="tasks__active">
    <div class="task">
      <div class="row gx-sm-30 gx-15 align-items-center">
        <div class="col-sm-2 col-auto task__left">
          <div class="checkbox task__checkbox">
            <input class="checkbox__input" id="task-2" type="checkbox"/>
            <label class="checkbox__label" for="task-2"></label>
          </div>
        </div>
        <div class="col-sm-10 col task__right">
          <div class="task__title"><a class="task__title-link" href="#"><span>Встретить старого друга в аэропорту</span></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  name: 'AppTasks'
}
</script>

<style scoped>

</style>
