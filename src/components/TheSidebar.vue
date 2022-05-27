<template>
  <aside v-if="task" class="sidebar">
    <button class="btn sidebar__close" type="button" @click="$emit('close', task.id)">
      <svg class="icon icon-x-lg">
        <use xlink:href="#x-lg"></use>
      </svg>
    </button>

    <section class="sidebar__top">
      {{ task }}
      <header class="sidebar__header">
        <div class="checkbox sidebar__checkbox flex-shrink-0">
          <input
            class="checkbox__input"
            :id="task.id"
            type="checkbox"
            @change="changeState"
            :checked="task.state === 'inactive'"
          >
          <label class="checkbox__label" :for="task.id"></label>
        </div>

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

      <SidebarNote :id="task.id" />
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
import { computed, ref } from 'vue'
import { useTaskForm } from '@/use/task-form'

export default {
  name: 'TheSidebar',
  props: {
    oneTask: {
      type: Object,
      required: true
    }
  },
  emits: ['close'],
  setup (props, { emit }) {
    const store = useStore()
    const id = ref(props.oneTask ? props.oneTask.id : {})
    const confirm = ref(false)
    const initial = computed(() => props.oneTask)
    const task = ref(initial.value || props.oneTask)

    const remove = async id => {
      try {
        await store.commit('remove', id)
        emit('close', id)
        confirm.value = false
      } catch (e) {
        console.error(e.message)
      }
    }

    return {
      task,
      changeState: () => store.commit('change', id.value),
      remove,
      confirm,
      ...useTaskForm(initial, task.value)
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
