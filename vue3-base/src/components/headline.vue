<template>
  <component :is="tagName" :class="class">
    <slot>headline</slot>
  </component>
</template>

<script>
export default {
  name: 'HeadLine',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'h2'
      }
    },
    class: {
      type: String,
      default: () => {
        return 'headline'
      }
    }
  }
}
</script>
