<template>
  <div>
    num--{{ num }}
    <div @click="add">+</div>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    add() {
      this.num++
      this.$emit('update:num', this.num)
    }
  }
}
</script>

<style></style>
