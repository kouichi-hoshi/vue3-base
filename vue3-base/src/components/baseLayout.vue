<script setup>
import linkData from '../model/linkData.js'
import snsLinkData from '../model/snsLinkData.js'
import logoMark from '../components/logoMark.vue'
import baseHeader from '../components/baseHeader.vue'
import baseTitle from '../components/baseTitle.vue'
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
    <div
      class="l-header bg-slate-100"
      v-scrollIn="{ interval: 1000, scroll: 1000, out: 100 }"
    >
      <baseHeader :base-header-slot="baseHeaderSlot">
        <template v-slot:logo>
          <logoMark class="logo-size" />
        </template>
        <template v-slot:title>
          <baseTitle :site-title="siteTitle" class="text-xl font-bold" />
        </template>
        <template v-slot:text>
          <p>{{ siteText }}</p>
        </template>
        <template v-slot:navigation>
          <nav class="base-navigation flex justify-end">
            <ul class="flex">
              <baseNavigation
                class="flex"
                inner-class="ml-6"
                :links="linkData"
                :outer-tag-name="globalNavTag"
              />
              <baseNavigation
                class="flex"
                inner-class="ml-6"
                :links="snsLinkData"
                :outer-tag-name="globalNavTag"
              />
            </ul>
          </nav>
        </template>
      </baseHeader>
    </div>

    <div class="l-main">
      <baseMain />
    </div>

    <div class="l-footer">
      <slot name="footer">
        <baseFooter />
      </slot>
    </div>
    <div id="copy-navigation"></div>
  </div>
</template>

<style lang="scss" scoped>
$h-nav-h: 100px; // v-scrollInディレクティブのoutの値と同じにする

.l-container {
  .l-header {
    height: $h-nav-h;
    .l-base-header {
      position: fixed;
      top: 0;
      width: 100%;
      z-index: 2;
      transition: transform 0.4s;
      transform: translateY(0);
    }
    &.close .l-base-header {
      transition: transform 0.4s;
      transform: translateY(-$h-nav-h);
    }
    &.active .l-base-header {
      transform: translateY(0);
    }
    .logo-size {
      width: 40px;
    }
  }
  // .l-main {
  // }
  // .l-footer {
  // }
}
</style>
