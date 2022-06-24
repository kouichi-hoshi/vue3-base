<template>
  <component :is="outerTagName">
    <component
      :is="innerTagName"
      :class="innerClass"
      v-for="(link, key) in links"
      :key="key"
    >
      <a
        :href="link.href"
        :target="isOuterLink(link.href) ? '_self' : '_blank'"
      >
        {{ link.label }}
      </a>
    </component>
  </component>
</template>

<script>
import isOuterLink from '../functions/isOuterLink.js'

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
      isOuterLink
    }
  }
}
</script>
