<template>
  <div class="p-2.5 md:p-15px">
    <!-- title & stars -->
    <div class="flex flex-col md:flex-row md:items-center gap-x-5px mb-5px">
      <h1 class="font-bold text-form text-sm md:text-base">
        The Fullerton Bay Hotel
      </h1>

      <div class="flex gap-x-px">
        <img
          v-for="number in 5"
          :key="'star-rating-' + number"
          src="/img/sidebar/star.png"
          alt="Star Rating"
          width="12px"
        />
      </div>
    </div>

    <h2 class="text-10px md:text-xs text-form mb-7px">
      80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (<NuxtLink
        to="#"
        class="text-xs text-blue-brand"
      >
        view map </NuxtLink
      >)
    </h2>

    <p class="text-10px md:hidden">
      <b class="text-10px">4.5 Excellent</b> (12,345 reviews)
    </p>

    <p class="hidden md:block text-xs text-night mb-11px truncate">
      “Excellent boutique hotel. Great rooms in excellent location. Awesome
      vibe. Beautiful beac...
    </p>

    <Labels />

    <div class="hidden md:flex items-center gap-x-11px">
      <div>
        <img src="/img/index/protection.png" alt="Protection" />
      </div>

      <span class="text-xs text-form"> Singapore - SG Clean </span>
    </div>
  </div>
</template>

<script>
import Labels from './info/Labels.vue'

export default {
  name: 'HotelInfo',
  components: {
    Labels,
  },
}
</script>
