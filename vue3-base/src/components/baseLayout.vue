<script setup>
import baseHeader from '../components/baseHeader.vue'
import baseMain from '../components/baseMain.vue'
import baseFooter from '../components/baseFooter.vue'
</script>

<template>
  <div class="l-container">
    <div class="l-header">
      <slot name="header">
        <baseHeader />
      </slot>
    </div>
    <div class="l-main">
      <slot name="main">
        <baseMain />
      </slot>
    </div>
    <div class="l-footer">
      <slot name="footer">
        <baseFooter />
      </slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// .l-container {
// }
// .l-header {
// }
// .l-main {
// }
// .l-footer {
// }
</style>
