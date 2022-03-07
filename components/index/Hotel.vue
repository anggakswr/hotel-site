<template>
  <section class="bg-white rounded-5px md:p-2.5 hover:shadow-lg flex mb-2.5">
    <!-- imgs -->
    <IndexHotelImgs :property="item.property" />

    <div class="w-full flex flex-col md:flex-row">
      <!-- info -->
      <IndexHotelInfo
        :property="item.property"
        :packages="item.packages || []"
      />

      <!-- rate img & price -->
      <IndexHotelRatePrice :packages="item.packages || []" />
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexHotel',
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
