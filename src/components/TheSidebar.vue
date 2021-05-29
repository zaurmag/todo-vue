<template>
  <aside v-if="task" :class="['sidebar', {'is-active': isVisible}]">
    <button class="btn sidebar__close" type="button" @click="$emit('close', true)">
      <svg class="icon icon-x-lg">
        <use xlink:href="#x-lg"></use>
      </svg>
    </button>

    <section class="sidebar__top">
      <header class="sidebar__header">
        <div class="checkbox sidebar__checkbox">
          <input
            class="checkbox__input"
            :id="task.id"
            type="checkbox"
            @change="changeState"
            :checked="task.state === 'inactive'"
          >
          <label class="checkbox__label" :for="task.id"></label>
        </div>
        <h2 class="h5 sidebar__tlt" :class="[{'is-inactive': task.state === 'inactive'}]">{{ task.name }}</h2>
      </header>

      <SidebarNote />
    </section>

    <sidebar-footer
      :date="task.date"
      @remove="remove(task.id)"
    />
  </aside>
</template>

<script>
import SidebarNote from './sidebar/SidebarNote'
import SidebarFooter from './sidebar/SidebarFooter'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  name: 'TheSidebar',
  props: {
    task: {
      type: Object,
      required: true
    },
    isVisible: {
      type: Boolean,
      required: true,
      default: false
    }
  },
  emits: ['close'],
  setup (props, { emit }) {
    const store = useStore()
    const id = ref(props.task ? props.task.id : {})

    const remove = async id => {
      try {
        await store.dispatch('remove', id)
        emit('close', false)
      } catch (e) {
        console.error(e.message)
      }
    }

    return {
      changeState: () => store.commit('changeState', id.value),
      remove
    }
  },
  components: {
    SidebarNote,
    SidebarFooter
  }
}
</script>

<style scoped>

</style>
