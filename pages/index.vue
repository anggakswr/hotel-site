<template>
  <main class="min-h-screen w-full flex flex-col justify-between">
    <!-- tabbar & search items (hotel) -->
    <section>
      <p class="font-bold mb-15px">Singapore: 9999 properties found</p>

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
}
</script>
