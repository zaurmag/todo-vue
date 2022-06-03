<template>
  <aside v-if="sidebar" class="sidebar">
    <button class="btn sidebar__close" type="button" @click="closeSidebar">
      <svg class="icon icon-x-lg">
        <use xlink:href="#x-lg"></use>
      </svg>
    </button>

    <section class="sidebar__top">
      <header class="sidebar__header">
        <app-checkbox
          :class-list="['sidebar__checkbox', 'flex-shrink-0']"
          :task="task" @change="changeState"
        />

        <div class="sidebar__tlt-wrap">
          <input
            class="h5 sidebar__tlt input-empty m-0"
            :class="{'is-inactive': task.state === 'inactive'}"
            v-model="name"
            @blur="onSubmit(); nBlur();"
            @keydown.enter="onSubmit(); $event.target.blur()"
            type="text"
          />
          <div class="sidebar__tlt-error" v-if="nError">{{ nError }}</div>
        </div>
      </header>

      <sidebar-note :id="task.id" />
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
import AppCheckbox from '@/components/ui/AppCheckbox'
import AppConfirm from './ui/AppConfirm'
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { useTaskForm } from '@/use/task-form'

export default {
  name: 'TheSidebar',
  props: ['id'],
  emits: ['close'],
  setup (props) {
    const store = useStore()
    const confirm = ref(false)
    const task = computed(() => store.getters['task/taskById'](props.id) || {})
    const sidebar = computed(() => store.getters['sidebar/sidebar'])
    console.log('Sidebar', sidebar.value)

    const remove = id => {
      store.dispatch('task/remove', id)
      store.commit('sidebar/close')
      confirm.value = false
    }

    return {
      changeState: id => store.commit('task/change', id),
      remove,
      confirm,
      name,
      task,
      sidebar,
      ...useTaskForm(task),
      closeSidebar: () => {
        store.commit('sidebar/close')
      }
    }
  },
  components: {
    SidebarNote,
    SidebarFooter,
    AppConfirm,
    AppCheckbox
  }
}
</script>

<style scoped lang="scss">
.sidebar {
  transform: translateX(0);
  opacity: 1;
  visibility: visible;

  &__tlt {
    &-error {
      color: #ff0014;
      font-size: 11px;
    }
  }
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

.input-empty {
  border: none;
  box-shadow: none;

  &:focus {
    outline: none;
  }
}
</style>
