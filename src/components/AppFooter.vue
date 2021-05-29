<template>
  <footer class="todo__footer">
    <div class="row">
      <div class="col-sm-10 offset-sm-2">
        <div class="form">
          <form action="#" @submit.prevent="onSubmit">
            <div :class="['form__group', {'is-error': nError} ]">
              <div class="position-relative">
                <input class="form__input" type="text" placeholder="Введите название задачи" v-model="name" @Blur="nBlur">
                <button class="btn form__btn" type="submit">
                  <svg class="icon icon-send">
                    <use xlink:href="#send"></use>
                  </svg>
                </button>
              </div>
              <div class="form__error-txt" v-if="nError">{{ nError }}</div>
            </div>
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
