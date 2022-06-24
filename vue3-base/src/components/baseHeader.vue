<template>
  <header class="base-header">
    <div v-if="checkSlot('logo')" class="base-header__logo">
      <slot name="logo"></slot>
    </div>
    <div v-if="checkSlot('title')" class="base-header__title">
      <slot name="title"></slot>
    </div>
    <div v-if="checkSlot('text')" class="base-header__text">
      <slot name="text"></slot>
    </div>
    <div v-if="checkSlot('navigation')" class="base-header__navigation">
      <slot name="navigation"></slot>
    </div>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
  props: {
    baseHeaderSlot: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkSlot(item) {
      if (this.baseHeaderSlot[item] === true) {
        return true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// .base-header {
// }
</style>
