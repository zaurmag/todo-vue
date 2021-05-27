<template>
  <footer class="todo__footer">
    <div class="row">
      <div class="col-sm-10 offset-sm-2">
        <div class="field">
          <form class="field__form" action="#" @submit.prevent="onSubmit">
            <div :class="['field__field', {'is-error': nError} ]">
              <input class="field__input" type="text" placeholder="Введите название задачи" v-model="name" @Blur="nBlur">
              <div class="field__error" v-if="nError">{{ nError }}</div>
            </div>

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
import { useTaskForm } from '../use/task-form'

export default {
  name: 'AppFooter',
  setup () {
    return {
      ...useTaskForm()
    }
  }
}
</script>

<style scoped>

</style>
