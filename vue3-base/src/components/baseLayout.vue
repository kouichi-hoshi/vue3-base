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
      :class="{ slideUp: isNavFadeIn }"
      ref="slideNavigation"
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      isNavFadeIn: false,
      options: {
        threshold: [1]
      },
      isIntersectingElement: false
    }
  },
  mounted() {
    //TODO: コンポーネントまたは外部化する
    const slideNavigation = this.$refs.slideNavigation
    const detachClass = (entries) => {
      // console.log(entries[0].isIntersecting)
      // console.log(entries[0])
      if (!entries[0].isIntersecting) {
        this.isNavFadeIn = true
      } else {
        this.isNavFadeIn = false
      }
    }
    const observer = new window.IntersectionObserver(detachClass, this.options)
    observer.observe(slideNavigation)
  }
}
</script>

<style lang="scss" scoped>
// .l-container {
// }
.l-header {
  $h-nav-h: 100px;
  height: $h-nav-h;
  &.slideUp .l-base-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
    transition: transform 0.4s 1s;
    transform: translateY(-$h-nav-h);
  }
  .logo-size {
    width: 40px;
  }
}
// .l-main {
// }
// .l-footer {
// }
</style>
