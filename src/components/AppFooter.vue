<template>
  <footer class="todo__footer">
    <div class="row">
      <div class="col-sm-10 offset-sm-2">
        <div class="field">
          <form class="field__form" action="#">
            <input class="field__input" type="text" placeholder="Введите название задачи">
            <button class="btn field__btn" type="submit">
              <svg class="icon icon-send">
                <use xlink:href="#send"></use>
              </svg>
            </button>
          </form>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>

</style>
