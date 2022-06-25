<template>
  <article class="main">
    <header>
      <h2>HOME</h2>
    </header>
    <section class="items">
      <header>
        <h3 class="items__title">Item</h3>
      </header>
      <div
        class="items__item-wrap grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-x-6"
      >
        <template v-for="(item, key) in items" :key="key">
          <div class="items__item">
            <a :href="item.href">
              <p v-if="item.src">
                <img
                  :src="'/src/assets/images/sample/' + item.src"
                  :alt="item.title"
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
