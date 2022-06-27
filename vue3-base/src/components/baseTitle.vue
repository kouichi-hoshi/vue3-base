<template>
  <component :is="tagName" :class="class">{{ siteTitle }}</component>
</template>

<script>
export default {
  props: {
    siteTitle: {
      type: String,
      required: true
    },
    class: {
      type: String,
      default: () => {
        return ''
      }
    },
    tagName: {
      type: String,
      default: () => {
        return 'h1'
      }
    }
  }
}
</script>
