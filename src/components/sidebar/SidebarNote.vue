<template>
  <sidebar-note-form :id="id" />

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
import { useStore } from 'vuex'
import { computed } from 'vue'
import SidebarNoteForm from './SidebarNoteForm'

export default {
  name: 'SidebarNote',
  props: {
    id: {
      type: String,
      required: true
    }
  },
  setup (props) {
    const store = useStore()
    const notes = computed(() => store.getters['notes/notesByTaskID'](props.id) || [])

    return {
      remove: id => store.commit('notes/remove', id),
      notes
    }
  },
  components: {
    SidebarNoteForm
  }
}
</script>

<style scoped>

</style>
