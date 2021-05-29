<template>
  <div
    :class="['task', {'is-inactive': task.state === 'inactive'}]"
     v-for="task in tasks"
     :key="task.id"
  >
    <div class="row gx-sm-30 gx-15 align-items-center">
      <div class="col-sm-2 col-auto task__left">
        <div class="checkbox task__checkbox">
          <input
            class="checkbox__input"
            :id="task.id"
            type="checkbox"
            @change="changeState(task.id)"
            :checked="task.state === 'inactive'"
          >
          <label class="checkbox__label" :for="task.id"></label>
        </div>
      </div>
      <div class="col-sm-10 col task__right">
        <div class="task__title">
          <a class="task__title-link" href="#" @click="$emit('click', task.id)">
            <span>{{ task.name }}</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'

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

    return {
      changeState: id => store.commit('changeState', id)
    }
  }
}
</script>

<style scoped>

</style>
