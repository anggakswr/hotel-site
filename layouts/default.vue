<template>
  <div class="bg min-h-screen pt-40 md:pt-145px px-2.5 md:px-115px">
    <!-- mobile popups -->
    <SortFilterPopup />
    <MapViewPopup />

    <Header />

    <div class="flex gap-x-4">
      <Sidebar />
      <Nuxt />
    </div>

    <Footer class="-mx-2.5 md:-mx-115px" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
.bg {
  background-color: #e5e5e5;
}
</style>
