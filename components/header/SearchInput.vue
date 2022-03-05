<template>
  <div class="relative flex-1">
    <!-- search icon -->
    <div id="dont-hide" class="absolute inset-y-0 left-0 box-center pl-2.5">
      <img src="/img/form/search.png" alt="Search Place" />
    </div>

    <input
      id="dont-hide"
      type="text"
      class="w-full h-50px rounded-3px pr-18px pl-34px border border-gray-brand text-sm text-form"
      placeholder="Singapore, Singapore"
      @focusin="getHotels"
    />
    <!-- @blur="cities = []"
    /> -->

    <div
      v-if="cities.length"
      id="dont-hide"
      class="absolute inset-x-0 bg-white rounded-3px mt-0.5 border border-gray-brand"
    >
      <button
        v-for="city in cities"
        :key="'city-' + city.cityCode"
        class="p-2.5 text-sm text-form w-full flex items-center gap-x-2.5"
        @click="goTo(city.cityCode)"
      >
        <img src="/img/header/location2.png" alt="location" />

        {{ city.label }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [],
    }
  },
  beforeDestroy() {
    window.removeEventListener('click', this.windowOnClickHandler)
  },
  mounted() {
    window.addEventListener('click', this.windowOnClickHandler)
  },
  methods: {
    async getHotels() {
      try {
        const res = await this.$axios.get('/api/job01/autosuggest')

        // const res = await this.$axios.get(
        //   'https://hiring.zumata.xyz/job01/autosuggest'
        // )

        this.cities = res.data
      } catch {
        // do nothing
      }
    },
    goTo(code) {
      this.$router.push({ query: { city: code } })
      this.cities = []
    },
    windowOnClickHandler(e) {
      if (e.target.id !== 'dont-hide') {
        this.cities = []
      }
    },
  },
}
</script>
