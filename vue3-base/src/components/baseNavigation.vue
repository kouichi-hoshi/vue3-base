<template>
  <component :is="outerTagName">
    <component
      :is="innerTagName"
      :class="innerClass"
      v-for="(link, key) in links"
      :key="key"
    >
      <component
        :is="checkLinkType(link.href) ? 'router-link' : 'a'"
        :to="checkLinkType(link.href) ? link.href : ''"
        :href="checkLinkType(link.href) ? '' : link.href"
        :target="checkLinkType(link.href) ? '' : '_blank'"
      >
        {{ link.label }}
      </component>
    </component>
  </component>
</template>

<script>
import checkLinkType from '../functions/checkLinkType.js'

export default {
  name: 'LinkMenu',
  props: {
    links: {
      type: Array,
      required: true
    },
    outerTagName: {
      type: String,
      default: () => {
        return 'ul'
      }
    },
    innerTagName: {
      type: String,
      default: () => {
        return 'li'
      }
    },
    innerClass: {
      type: String,
      default: () => {
        return ''
      }
    }
  },
  data() {
    return {
      checkLinkType
    }
  }
}
</script>
