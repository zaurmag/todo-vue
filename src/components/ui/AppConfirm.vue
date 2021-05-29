<template>
  <div class="confirm">
    <div class="confirm__bg" @click="$emit('close')"></div>
    <div class="confirm__content">
      <h3 class="h6">{{ title }}</h3>
      <div class="confirm__buttons">
        <button class="btn btn-success btn-sm px-3" type="button" @click="$emit('confirm')">Да</button>
        <button class="btn btn-danger btn-sm px-3" @click="$emit('close')">Отмена</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppConfirm',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  emits: ['close', 'confirm']
}
</script>

<style scoped>

</style>
