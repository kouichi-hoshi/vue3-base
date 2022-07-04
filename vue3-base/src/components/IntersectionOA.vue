<template>
  <component
    :is="tagName"
    class="mask mask-1"
    :class="isIntersecting ? 'show' : ''"
    ref="slideNavigation"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'IntersectionObserverAnimation',
  props: {
    tagName: {
      type: String,
      default: () => {
        return 'div'
      }
    }
  },
  data: () => ({
    isIntersecting: false,
    options: {
      threshold: [0.00001]
    }
  }),
  mounted() {
    const slideNavigation = this.$refs.slideNavigation
    this.scroll(slideNavigation, this.options)
  },
  methods: {
    scroll(target, options) {
      const callBack = (entries) => {
        // if (entries[0].isIntersecting === false) {
        this.isIntersecting = entries[0].isIntersecting
        // }
      }
      const observer = new window.IntersectionObserver(callBack, options)
      observer.observe(target)
    }
  }
}
</script>

<style lang="scss">
.mask {
  object-fit: cover;
  max-width: 100%;
  &.show {
    transition-duration: 0.6s;
    transition-timing-function: ease-in-out;
  }
  &.mask-1 {
    clip-path: inset(0 99.9% 0 0);
  }

  &.mask-1.show {
    clip-path: inset(0 0 0 0);
  }

  &.mask-2 {
    clip-path: inset(0 0 0 100%);
  }

  &.mask-2.show {
    clip-path: inset(0 0 0 0);
  }

  &.mask-3 {
    clip-path: inset(100% 0 100% 0);
  }

  &.mask-3.show {
    clip-path: inset(0 0 0 0);
  }

  &.mask-4 {
    clip-path: circle(0 at center);
  }

  &.mask-4.show {
    clip-path: circle(100% at center);
  }
}
</style>
