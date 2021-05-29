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
  <div v-if="notes" class="note mt-30">
    <div class="note__item" v-for="note in notes" :key="note.id">
      <button class="btn note__close p-0" type="button" @click="remove(note.id)">
        <svg class="icon icon-x">
          <use xlink:href="#x"></use>
        </svg>
      </button>
      {{ note.desc }}
    </div>
  </div>
</template>

<script>
import { useNoteForm } from '../../use/note-form'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'SidebarNote',
  props: {
    id: {
      type: String,
      required: true
    },
    stateSB: {
      type: Boolean,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const notes = computed(() => store.getters.taskNotes(props.id))

    return {
      ...useNoteForm(props.id),
      remove: id => store.dispatch('removeNote', {
        id,
        taskID: props.id
      }),
      notes
    }
  }
}
</script>

<style scoped>

</style>
