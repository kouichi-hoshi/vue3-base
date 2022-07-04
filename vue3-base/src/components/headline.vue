<template>
  <IntersectionOA>
    <component :is="tagName" :class="class">
      <slot>headline</slot>
    </component>
  </IntersectionOA>
</template>

<script>
import IntersectionOA from '../components/IntersectionOA.vue'
export default {
  components: {
    IntersectionOA
  },
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
