<template>
  <div
    v-if="mapViewPopupOn"
    class="fixed inset-0 z-20 md:hidden overflow-y-scroll"
    :style="{ backgroundColor: '#F5F5F5' }"
  >
    <!-- close btn & title -->
    <nav
      :style="{ height: '55px' }"
      class="fixed z-10 inset-x-0 bg-white px-17px flex items-center border-b border-gray-brand"
    >
      <button class="mr-5" @click="mapViewPopupOn = false">
        <img src="/img/mobile/close.png" alt="Close" />
      </button>

      <h1 class="text-blue-brand font-bold">
        {{ $t('mobileNav.where') }}
      </h1>
    </nav>

    <div :style="{ marginTop: '55px' }" class="p-5 bg-white h-full">
      <!-- search bar -->
      <div class="relative mb-5">
        <!-- search icon -->
        <div class="absolute inset-y-0 left-0 box-center pl-2.5">
          <img src="/img/form/search.png" alt="Search Place" />
        </div>

        <input
          v-model="inputVal"
          type="text"
          class="h-10 w-full rounded-3px border border-gray-brand text-sm"
          :style="{ padding: '0 33px' }"
          placeholder="Singapore, Singapore"
        />
      </div>

      <!-- calendar -->
      <div class="relative mb-5">
        <!-- search icon -->
        <div class="absolute inset-y-0 left-0 box-center pl-2.5">
          <img src="/img/form/date.png" alt="Search Place" />
        </div>

        <button
          class="w-full bg-white flex items-center justify-between h-10 rounded-3px pr-3 pl-34px border border-gray-brand"
        >
          <span class="text-sm text-form">Jul 19 - Jul 20</span>
          <span class="text-sm text-night">1 {{ $t('searchBar.night') }}</span>
        </button>
      </div>

      <!-- people & room -->
      <button
        class="mb-5 w-full bg-white flex items-center h-10 rounded-3px px-4 border border-gray-brand"
      >
        <span class="text-sm text-form">
          2 {{ $t('searchBar.adults') }}, 0 {{ $t('searchBar.children') }}, 1
          {{ $t('searchBar.room') }}
        </span>
      </button>

      <button
        class="search-btn h-10 bg-lightblue box-center rounded-3px text-sm text-white font-bold"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputVal: '',
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: this.mapViewPopupOn ? 'overflow-y-hidden' : '',
      },
    }
  },
  computed: {
    mapViewPopupOn: {
      get() {
        return this.$store.state.mapViewPopupOn
      },
      set(val) {
        this.$store.commit('setMapViewPopupOn', val)
      },
    },
    country() {
      return this.$store.state.country
    },
  },
  watch: {
    country(newVal) {
      this.inputVal = newVal
    },
  },
}
</script>

<style scoped>
.search-btn {
  width: 180px;
}
</style>
