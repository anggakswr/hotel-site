<template>
  <section class="w-full bg-white rounded-5px p-2.5 hover:shadow-lg">
    <div class="flex">
      <!-- imgs -->
      <IndexHotelImgs />

      <div class="w-full grid grid-cols-3">
        <!-- info -->
        <IndexHotelInfo />

        <!-- rate img & price -->
        <IndexHotelRatePrice />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexHotel',
}
</script>
