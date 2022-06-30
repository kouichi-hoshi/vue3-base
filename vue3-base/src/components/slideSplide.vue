<template>
  <Splide tag="section" :aria-label="ariaLabel" :options="slideOptions">
    <SplideSlide v-for="(slideItem, key) in slideItems" :key="key">
      <img class="object-cover" :class="aspect" :src="slideItem" :alt="key" />
    </SplideSlide>
  </Splide>
</template>

<script>
import { defineComponent } from 'vue'
import { Splide, SplideSlide } from '@splidejs/vue-splide'

import '@splidejs/vue-splide/css' // デフォルトのテーマ
// import '@splidejs/vue-splide/css/skyblue'// ほかのテーマ
// import '@splidejs/vue-splide/css/sea-green' // ほかのテーマ
// import '@splidejs/vue-splide/css/core'// コアスタイルのみ

export default defineComponent({
  props: {
    slideItems: {
      type: Array,
      required: true
    },
    slideOptions: {
      type: Object
    },
    ariaLabel: {
      type: String,
      default: ''
    },
    aspect: {
      type: String,
      default: 'aspect-[16/9]'
    }
  },
  components: {
    Splide,
    SplideSlide
  }
})
</script>
