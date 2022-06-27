<template>
  <header class="l-base-header flex items-center bg-slate-100 p-8">
    <div v-if="checkSlot('logo')" class="l-base-header__logo mr-2">
      <slot name="logo" />
    </div>
    <div v-if="checkSlot('title')" class="l-base-header__title mr-4">
      <slot name="title" />
    </div>
    <div v-if="checkSlot('text')" class="l-base-header__text mr-2">
      <slot name="text" />
    </div>
    <div
      v-if="checkSlot('navigation')"
      class="l-base-header__navigation flex-1"
    >
      <slot name="navigation" />
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
