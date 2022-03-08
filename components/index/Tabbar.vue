<template>
  <nav
    class="hidden md:grid grid-cols-4 divide-x divide-gray-brand mb-15px h-44px"
  >
    <button
      v-for="(tab, index) in tabs"
      :key="'tab-' + tab.val"
      class="box-center gap-x-1.5 relative"
      :class="{
        'bg-blue-brand':
          active === tab.val ||
          (tab.val === 'price' && active === 'highest') ||
          (tab.val === 'price' && active === 'lowest'),
        'bg-white': active !== tab.val,
        'rounded-l-5px': index < 1,
        'rounded-r-5px': index === tabs.length - 1,
      }"
      @click="sortBy(tab.val)"
    >
      <span
        class="text-sm"
        :class="
          active === tab.val ||
          (tab.val === 'price' && active === 'highest') ||
          (tab.val === 'price' && active === 'lowest')
            ? ' text-white font-bold'
            : 'text-form'
        "
      >
        <template v-if="tab.val === 'price'">
          {{ $t('tabbar.price') }}

          (
          {{ $t(`tabbar.${active === 'highest' ? 'highest' : 'lowest'}`) }}
          {{ $t('tabbar.first') }}
          )
        </template>

        <template v-else>
          {{ $t(`tabbar.title.${tab.text}`) }}
        </template>
      </span>

      <!-- only show for price filter -->
      <img
        v-if="tab.val === 'price'"
        src="/img/index/triangle-down-black.png"
        alt="Black Down Triangle"
        :class="{
          'filter brightness-0 invert':
            active === 'highest' || active === 'lowest',
        }"
      />

      <!-- only show for price filter -->
      <button
        v-if="tab.val === 'price' && priceBtnOn"
        class="absolute inset-x-0 w-full bg-white rounded-5px h-44px shadow-md text-sm"
        :style="{ bottom: '-47px' }"
        @click="sortBy(priceFilter)"
      >
        {{ $t('tabbar.price') }}

        (
        {{ $t(`tabbar.${priceFilter}`) }}
        {{ $t('tabbar.first') }}
        )
      </button>
    </button>
  </nav>
</template>

<script>
export default {
  name: 'IndexTabbar',
  data() {
    return {
      tabs: [
        { val: 'popularity', text: 'Popularity' },
        { val: 'price', text: 'Price (lowest first)' },
        { val: 'reviews', text: 'Reviews' },
        { val: 'discount', text: 'Discount' },
      ],
      priceBtnOn: false,
    }
  },
  computed: {
    active() {
      return this.$route.query.sortby || 'popularity'
    },
    priceFilter() {
      return this.active === 'highest' ? 'lowest' : 'highest'
    },
  },
  methods: {
    sortBy(val) {
      if (val === 'price') {
        this.priceBtnOn = !this.priceBtnOn
      } else {
        this.$router.push({ ...this.$route.query, query: { sortby: val } })
      }
    },
  },
}
</script>

<style scoped>
.h-44px {
  height: 44px;
}
</style>
