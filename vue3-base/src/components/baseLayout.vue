<script setup>
import linkData from '../model/linkData.js'
import snsLinkData from '../model/snsLinkData.js'
import logoMark from '../components/logoMark.vue'
import baseHeader from '../components/baseHeader.vue'
import baseMain from '../components/baseMain.vue'
import baseNavigation from '../components/baseNavigation.vue'
import baseFooter from '../components/baseFooter.vue'

// baseHeaderのslotの有効化/無効化を設定
const baseHeaderSlot = {
  logo: true,
  title: true,
  text: true,
  navigation: true
}

// サイトのタイトルを取得
const siteTitle = import.meta.env.VITE_SITE_TITLE

// サイトの説明文を取得
const siteText = import.meta.env.VITE_SITE_TEXT

// グローバルナビゲーションの外側のタグを設定
const globalNavTag = 'li'
</script>

<template>
  <div class="l-container">
    <div class="l-header">
      <baseHeader :base-header-slot="baseHeaderSlot">
        <template v-slot:logo>
          <logoMark />
        </template>
        <template v-slot:title>
          <h1>{{ siteTitle }}</h1>
        </template>
        <template v-slot:text>
          <p>{{ siteText }}</p>
        </template>
        <template v-slot:navigation>
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
        </template>
      </baseHeader>
    </div>

    <div class="l-main">
      <baseMain class="container mx-auto" />
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
