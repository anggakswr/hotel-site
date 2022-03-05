<template>
  <main class="min-h-screen w-full flex flex-col justify-between">
    <!-- tabbar & search items (hotel) -->
    <section>
      <!-- mobile select -->
      <div class="mx-13px">
        <select
          class="w-full mt-2.5 mb-15px rounded-3px h-30px text-sm text-white font-bold bg-blue-brand flex md:hidden items-center py-0 px-2.5"
        >
          <option>{{ $t('indexPage.selectOne') }}</option>
        </select>

        <p class="font-bold mb-15px">
          Singapore: 9999
          {{ $t('indexPage.propertiesFound') }}
        </p>
      </div>

      <IndexTabbar />

      <IndexNotFound v-if="!cityCode" />

      <!-- this hotel component can be looped -->
      <IndexHotel
        v-for="(hotel, index) in hotels"
        :key="hotel.name + index"
        :item="hotel"
      />
    </section>

    <!-- pagination -->
    <IndexPagination />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      loading: false,
      hotels: [],
    }
  },
  computed: {
    cityCode() {
      return this.$route.query.city
    },
  },
  watch: {
    '$route.query.city'(newVal) {
      if (newVal) {
        this.getHotels()
      }
    },
  },
  mounted() {
    if (this.cityCode) {
      this.getHotels()
    }
  },
  methods: {
    async getHotels() {
      this.loading = true

      try {
        const res = await this.$axios.get('/api/job01/search/' + this.cityCode)
        const { outlets } = res.data
        this.hotels = outlets.availability.results
      } catch (err) {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        if (err.response.data) {
          // this.errorFromBackend =
          //   err.response.data.title || err.response.data.message
        } else {
          // this.errorFromBackend = err.message
        }
      }

      this.loading = false
    },
  },
}
</script>
