<template>
  <article class="main">
    <SlideSplide
      :slide-items="slideItems"
      :slide-options="slideOptions"
      :aspect="aspect"
      :aria-label="ariaLabel"
    />
    <header class="container mx-auto text-center">
      <h2>HOME</h2>
    </header>
    <section class="items container mx-auto">
      <header>
        <h3 class="items__title">Item</h3>
      </header>
      <div
        class="items__item-wrap grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        <repeatCard
          card-class="items__item"
          :items="items"
          :imgPath="itemsPath"
          titleClass="mt-2 text-xl"
        />
      </div>
    </section>
  </article>
</template>

<script>
import itemsSample from '../model/itemsSample.js'
import SlideSplide from '../components/slideSplide.vue'
import repeatCard from '../components/repeatCard.vue'

export default {
  setup() {
    const items = itemsSample // Itemセクションで表示するデータ
    const itemsPath = '/src/assets/images/sample/' //Itemセクションで表示する画像のパス

    const slideData = {
      images: ['007.jpg', '008.jpg', '009.jpg', '011.jpg', '013.jpg'], // スライドで表示する画像
      src: 'src/assets/images/sample/', // 画像のパス
      ariaLabel: 'key Visual', //スライド本体のaria-label属性の値
      aspect: 'aspect-[16/7]' //スライド画像のアスペクトレシオの設定
    }
    // スライド画像のパスとファイル名を結合し配列に格納する
    const slideItems = slideData.images.map((img) => {
      return slideData.src + img
    })
    const slideOptions = {
      type: 'fade', // スライドの動作をフェードに指定
      speed: '1000', // スライドが切り替わる時間をミリ秒で指定
      arrows: false, // スライドを操作するためのアローボタンを使用しない設定
      autoplay: true, // ロード後、自動的にスライドを実行
      rewind: true // 最後のスライド画像が表示された後、最初の画像にもどる
    }
    const ariaLabel = slideData.ariaLabel
    const aspect = slideData.aspect
    return {
      items,
      itemsPath,
      slideItems,
      slideOptions,
      ariaLabel,
      aspect
    }
  },
  components: { SlideSplide, repeatCard }
}
</script>

<style lang="scss">
// .main {
//   .items {
//     &__item-wrap {
//       display: flex;
//       flex-wrap: wrap;
//       gap: 1rem;
//     }
//     &__item {
//       flex: 0 1 calc((100% - 2rem) / 3);
//     }
//   }
// }
</style>
