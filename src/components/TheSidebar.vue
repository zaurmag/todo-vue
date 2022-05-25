<template>
  <aside v-if="task" class="sidebar">
    <button class="btn sidebar__close" type="button" @click="$emit('close')">
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

      <SidebarNote
        :id="task.id"
        :stateSB="isVisible"
      />
    </section>

    <sidebar-footer
      :date="task.date"
      @remove="confirm = true"
    />

    <teleport to="#toDo">
      <app-confirm
        v-if="confirm"
        title="Вы действительно хотите удалить?"
        @close="confirm = false"
        @confirm="remove(task.id)"
      />
    </teleport>
  </aside>
</template>

<script>
import SidebarNote from './sidebar/SidebarNote'
import SidebarFooter from './sidebar/SidebarFooter'
import AppConfirm from './ui/AppConfirm'
import { useStore } from 'vuex'
import { ref } from 'vue'

export default {
  name: 'TheSidebar',
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  setup (props, { emit }) {
    const store = useStore()
    const id = ref(props.task ? props.task.id : {})
    const confirm = ref(false)

    const remove = async id => {
      try {
        await store.commit('remove', id)
        emit('close')
        confirm.value = false
      } catch (e) {
        console.error(e.message)
      }
    }

    return {
      changeState: () => store.commit('change', id.value),
      remove,
      confirm
    }
  },
  components: {
    SidebarNote,
    SidebarFooter,
    AppConfirm
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transform: translateX(0);
  opacity: 1;
  transition-timing-function: ease-in;
  transition: transform .3s ease, opacity .4s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(101%);
  opacity: 0;
  transition-timing-function: ease-out;
}
</style>
