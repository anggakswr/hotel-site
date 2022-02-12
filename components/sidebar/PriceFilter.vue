<template>
  <section class="bg-white rounded-5px p-5">
    <div class="box-between">
      <h1 class="text-sm font-bold">Price per night</h1>

      <button class="text-xs font-bold text-blue-brand">CLEAR</button>
    </div>

    <Slider
      v-model="range"
      class="range-slider mt-29px mb-19px"
      :min="0"
      :max="100"
      :tooltips="false"
    />

    <div class="box-between">
      <span class="price"> SGD 0 </span>

      <div class="w-3.5 border-t border-black" />

      <span class="price"> SGD 550 </span>
    </div>
  </section>
</template>

<script>
import Slider from '@vueform/slider/dist/slider.vue2'

export default {
  components: {
    Slider,
  },
  data() {
    return {
      range: [0, 50],
    }
  },
}
</script>

<style src="@vueform/slider/themes/default.css"></style>

<style scoped>
.price {
  width: 110px;
  height: 30px;
  padding: 10px;
  @apply text-xs rounded-3px border border-gray-brand flex items-center;
}
</style>
