<template>
  <div
    :class="['task', {'is-inactive': task.state === 'inactive'}]"
     v-for="task in tasks"
     :key="task.id"
  >
    <div class="row gx-sm-30 gx-15 align-items-center">
      <div class="col-sm-2 col-auto task__left">
        <app-checkbox
          :class-list="['task__checkbox']"
          :task="task" @change="changeState"
        />
      </div>
      <div class="col-sm-10 col task__right">
        <div class="task__title">
          <a
            class="task__title-link"
            :class="{'is-active': task.id === currentTaskID && sidebar}"
            href="#"
            @click.prevent="$emit('click', task)"
          >
            <span>{{ task.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppCheckbox from '@/components/ui/AppCheckbox'
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
  name: 'AppTasks',
  emits: ['click'],
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  setup () {
    const store = useStore()
    const currentTaskID = computed(() => store.getters['sidebar/sidebarCurrentTaskID'] || '')
    const sidebar = computed(() => store.getters['sidebar/sidebar'] || false)

    return {
      sidebar,
      currentTaskID,
      changeState: id => store.commit('task/change', id)
    }
  },
  components: {
    AppCheckbox
  }
}
</script>

<style scoped lang="scss">
  .task__title-link {
    &.is-active {
      color: #0f93bb;
    }
  }
</style>
