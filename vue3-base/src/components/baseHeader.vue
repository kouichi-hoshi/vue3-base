<script setup>
import logoMark from '../components/logoMark.vue'
const siteTitle = import.meta.env.VITE_SITE_TITLE
const siteText = import.meta.env.VITE_SITE_TEXT
</script>
<template>
  <header class="base-header">
    <logoMark />
    <h1>{{ siteTitle }}</h1>
    <p>{{ siteText }}</p>
  </header>
</template>

<style lang="scss" scoped>
// .base-header {
// }
</style>
