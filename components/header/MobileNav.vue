<template>
  <nav class="fixed z-10 top-0 inset-x-0 bg-white md:hidden">
    <!-- logo & hamburger menu -->
    <LogoAndHamburger />

    <!-- search bar -->
    <SearchBar />

    <!-- sort & filter, map view -->
    <SortFilterMapView />
  </nav>
</template>

<script>
import LogoAndHamburger from './mobile-nav/LogoAndHamburger.vue'
import SearchBar from './mobile-nav/SearchBar.vue'
import SortFilterMapView from './mobile-nav/SortFilterMapView.vue'

export default {
  components: {
    LogoAndHamburger,
    SearchBar,
    SortFilterMapView,
  },
}
</script>
