<template>
  <section class="w-full bg-white rounded-5px md:p-2.5 hover:shadow-lg flex">
    <!-- imgs -->
    <IndexHotelImgs />

    <div class="w-full flex flex-col md:flex-row">
      <!-- info -->
      <IndexHotelInfo />

      <!-- rate img & price -->
      <IndexHotelRatePrice />
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexHotel',
}
</script>
