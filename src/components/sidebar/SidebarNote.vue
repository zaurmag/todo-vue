<template>
  <form action="#">
    <div class="form">
      <div class="mb-2">
        <textarea class="form__input sidebar__task-text" placeholder="Описание задачи"></textarea>
      </div>
      <div class="text-end">
        <button class="btn btn-primary btn-sm px-3 text-white" type="button">Добавить</button>
      </div>
    </div>
  </form>
  <div class="note mt-30">
    <div class="note__item">
      <button class="btn note__close p-0" type="button">
        <svg class="icon icon-x">
          <use xlink:href="#x"></use>
        </svg>
      </button>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et illo officia ratione rem, soluta voluptates? Adipisci eaque eligendi quo?
    </div>
  </div>
</template>

<script>
export default {
  name: 'SidebarNote'
}
</script>

<style scoped>

</style>
