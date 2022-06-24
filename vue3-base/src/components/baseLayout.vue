<script setup>
import linkData from '../model/linkData.js'
import snsLinkData from '../model/snsLinkData.js'
import baseHeader from '../components/baseHeader.vue'
import baseMain from '../components/baseMain.vue'
import baseNavigation from '../components/baseNavigation.vue'
import baseFooter from '../components/baseFooter.vue'
const globalNavTag = 'li'
</script>

<template>
  <div class="l-container container mx-auto">
    <div class="l-header">
      <slot name="header">
        <baseHeader />
      </slot>
    </div>
    <div class="l-global-navigation">
      <nav class="base-navigation">
        <ul class="flex">
          <baseNavigation
            class="nav flex"
            inner-class="mr-2"
            :links="linkData"
            :outer-tag-name="globalNavTag"
          />
          <baseNavigation
            class="nav-sns flex"
            inner-class="mr-2"
            :links="snsLinkData"
            :outer-tag-name="globalNavTag"
          />
        </ul>
      </nav>
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
