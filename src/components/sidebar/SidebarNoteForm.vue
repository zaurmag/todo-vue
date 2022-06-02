<template>
  <form action="#" @submit.prevent="onSubmit">
    <div class="form">
      <div class="mb-2">
        <div :class="['form__group', {'is-error': dError} ]">
          <textarea
            class="form__input sidebar__task-text"
            placeholder="Описание задачи"
            v-model="desc"
            @blur="dBlur"
          ></textarea>
          <div class="form__error-txt" v-if="dError">{{ dError }}</div>
        </div>
      </div>
      <div class="text-end">
        <button class="btn btn-primary btn-sm px-3 text-white" type="submit">Добавить</button>
      </div>
    </div>
  </form>
</template>

<script>
import { useNoteForm } from '@/use/note-form'
export default {
  name: 'SidebarNoteForm',
  props: ['id'],
  setup (props) {
    return {
      ...useNoteForm(props.id)
    }
  }
}
</script>

<style scoped>

</style>
