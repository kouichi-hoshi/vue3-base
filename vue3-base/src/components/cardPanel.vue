<template>
  <div v-for="(item, key) in items" :class="cardClass" :key="key">
    <a :href="item.href">
      <p>
        <img
          :src="item.fileName ? imgPath + item.fileName : noImage"
          :alt="item.title"
          class="object-cover"
          :class="aspect"
        />
      </p>
      <component :is="titleTagName" :class="titleClass">
        {{ item.title }}
      </component>
      <p>{{ item.text }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      /**
       *itemsの構造の説明
       * @param {Object} items.title タイトル、名前、見出しなどの短い文字列
       * @param {Object} items.text 説明文
       * @param {Object} items.fileName ファイル名
       * @param {Object} items.href このアイテムのリンク先URL
       */
      type: Object,
      required: true
    },
    imgPath: {
      // 画像の格納場所のパス
      type: String,
      required: true
    },
    noImage: {
      // 画像がない場合に代りに表示するダミー画像のパス
      type: String,
      default: '/src/assets/images/common/no-image.png'
    },
    cardClass: {
      type: String,
      default: ''
    },
    aspect: {
      type: String,
      default: 'aspect-[3/2]'
    },
    titleTagName: {
      type: String,
      default: () => {
        return 'h4'
      }
    },
    titleClass: {
      type: String,
      default: ''
    }
  }
}
</script>
