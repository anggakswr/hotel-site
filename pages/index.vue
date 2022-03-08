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

        <p v-if="loading" class="font-bold mb-15px">
          {{ $t('indexPage.finding') }}
        </p>

        <p v-else class="font-bold mb-15px">
          {{
            $store.state.country
              ? $store.state.country.split(',')[0]
              : 'Singapore'
          }}:

          {{ pagination.totalItems || '0' }}

          {{ $t('indexPage.propertiesFound') }}
        </p>
      </div>

      <IndexTabbar />

      <!-- loading placeholder -->
      <template v-if="loading">
        <IndexHotelSkeleton />
        <IndexHotelSkeleton />
        <IndexHotelSkeleton />
      </template>

      <template v-else>
        <IndexError v-if="errorFromBackend" :errmsg="errorFromBackend" />
        <IndexNotFound v-else-if="!cityCode || !hotels.length" />

        <template v-else>
          <!-- this hotel component can be looped -->
          <IndexHotel
            v-for="(hotel, index) in hotels"
            :key="hotel.property.name + index"
            :item="hotel"
          />
        </template>
      </template>
    </section>

    <!-- pagination -->
    <IndexPagination :pagination="pagination" />
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      loading: false,
      hotels: [],
      pagination: {},
      errorFromBackend: '',
    }
  },
  computed: {
    cityCode() {
      return this.$route.query.city
    },
  },
  watch: {
    '$route.query.city'(newVal) {
      this.errorFromBackend = ''
      this.hotels = []
      this.pagination = {}

      if (newVal) {
        this.getHotels()
      }
    },
  },
  mounted() {
    this.errorFromBackend = ''
    this.hotels = []
    this.pagination = {}

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

        if (outlets.availability.pagination) {
          this.pagination = outlets.availability.pagination
        }
      } catch (err) {
        window.scrollTo({ top: 0, behavior: 'smooth' })

        if (err.response.data) {
          this.errorFromBackend =
            err.response.data.title || err.response.data.message
        } else {
          this.errorFromBackend = err.message
        }
      }

      this.loading = false
    },
  },
}
</script>
