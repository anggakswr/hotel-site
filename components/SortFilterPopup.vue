<template>
  <div
    v-if="sortFilterPopupOn"
    class="fixed inset-0 z-20 md:hidden overflow-y-scroll"
    :style="{ backgroundColor: '#F5F5F5' }"
  >
    <!-- close btn & title -->
    <nav
      :style="{ height: '55px' }"
      class="fixed z-10 inset-x-0 bg-white px-17px flex items-center border-b border-gray-brand"
    >
      <button class="mr-5" @click="sortFilterPopupOn = false">
        <img src="/img/mobile/close.png" alt="Close" />
      </button>

      <h1 class="text-blue-brand font-bold">
        {{ $t('mobileNav.sortFilter') }}
      </h1>
    </nav>

    <h2
      :style="{ marginTop: '55px' }"
      class="py-3 px-5 text-sm text-blue-brand font-bold"
    >
      {{ $t('mobileNav.sortFilterPopup.sortBy') }}
    </h2>

    <select class="py-3 px-5 h-11 border-none text-sm w-full">
      <option value="lowest">
        {{ $t('tabbar.price') }} ({{ $t('tabbar.lowest') }}
        {{ $t('tabbar.first') }})
      </option>
    </select>

    <h2 class="py-3 px-5 text-sm text-blue-brand font-bold">
      {{ $t('mobileNav.sortFilterPopup.filterBy') }}
    </h2>

    <Sidebar popup-on />

    <!-- clear btn & filter btn -->
    <nav
      class="h-60px fixed z-10 inset-x-0 bottom-0 bg-white px-5 grid grid-cols-2 gap-x-5 items-center border-t border-gray-brand"
    >
      <button
        class="h-10 rounded-3px text-blue-brand text-sm font-bold box-center border-2 border-blue-brand"
      >
        Clear
      </button>

      <button
        class="h-10 rounded-3px bg-blue-brand text-white text-sm font-bold box-center"
      >
        Filter
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  head() {
    return {
      bodyAttrs: {
        class: this.sortFilterPopupOn ? 'overflow-y-hidden' : '',
      },
    }
  },
  computed: {
    sortFilterPopupOn: {
      get() {
        return this.$store.state.sortFilterPopupOn
      },
      set(val) {
        this.$store.commit('setSortFilterPopupOn', val)
      },
    },
  },
}
</script>
