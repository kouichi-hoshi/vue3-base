<template>
  <footer class="l-base-footer container mx-auto py-24">
    <div v-if="checkSlot('logo')" class="l-base-footer__logo mb-2">
      <slot name="logo" />
    </div>
    <div v-if="checkSlot('title')" class="l-base-footer__title">
      <slot name="title" />
    </div>
    <div v-if="checkSlot('text')" class="l-base-footer__text mr-2">
      <slot name="text" />
    </div>
    <div
      v-if="checkSlot('navigation')"
      class="l-base-footer__navigation flex-1"
    >
      <slot name="navigation" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'BaseFooter',
  props: {
    baseFooterSlot: {
      type: Object,
      required: true
    }
  },
  methods: {
    checkSlot(item) {
      if (this.baseFooterSlot[item] === true) {
        return true
      }
    }
  }
}
</script>
