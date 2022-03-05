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

      <!-- this hotel component can be looped -->
      <IndexHotel />
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
    }
  },
  watch: {
    '$route.query.city'(newVal) {
      if (newVal) {
        this.getHotels()
      }
    },
  },
  methods: {
    getHotels() {
      this.loading = true
      this.loading = false
    },
  },
}
</script>
