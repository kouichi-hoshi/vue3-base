<template>
  <article class="main">
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
        <template v-for="(item, key) in items" :key="key">
          <div class="items__item">
            <a :href="item.href">
              <p>
                <img
                  :src="
                    item.fileName
                      ? '/src/assets/images/sample/' + item.fileName
                      : '/src/assets/images/common/no-image.png'
                  "
                  :alt="item.title"
                  class="object-cover aspect-[3/2]"
                />
              </p>
              <h4>{{ item.title }}</h4>
              <p>{{ item.text }}</p>
            </a>
          </div>
        </template>
      </div>
    </section>
  </article>
</template>

<script>
import itemsSample from '../model/itemsSample.js'

export default {
  setup() {
    const items = itemsSample
    return {
      items
    }
  }
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
