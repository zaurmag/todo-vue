<template>
  <div class="page">
    <div class="container">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  name: 'AppPage',
  setup (props) {
    const title = ref(props.title)
    document.title = title.value
  }
}
</script>

<style scoped>

</style>
