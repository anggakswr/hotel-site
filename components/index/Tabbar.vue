<template>
  <nav
    class="grid grid-cols-4 bg-white rounded-5px divide-x divide-gray-brand overflow-hidden mb-15px"
    :style="{ height: '44px' }"
  >
    <button
      v-for="tab in tabs"
      :key="'tab-' + tab.val"
      class="box-center gap-x-1.5"
      :class="{ 'bg-blue-brand': active === tab.val }"
      @click="sortBy(tab.val)"
    >
      <span
        class="text-sm"
        :class="{
          ' text-white font-bold': active === tab.val,
          'text-form': active !== tab.val,
        }"
      >
        {{ tab.text }}
      </span>

      <img
        v-if="tab.val === 'price'"
        src="/img/index/triangle-down-black.png"
        alt="Black Down Triangle"
        :class="{ 'filter brightness-0 invert': active === tab.val }"
      />
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
    }
  },
  computed: {
    active() {
      return this.$route.query.sortby || 'popularity'
    },
  },
  methods: {
    sortBy(val) {
      this.$router.push({ query: { sortby: val } })
    },
  },
}
</script>
