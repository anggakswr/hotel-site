<template>
  <div class="col-span-2 p-15px">
    <!-- title & stars -->
    <div class="flex items-center gap-x-5px mb-5px">
      <h1 class="font-bold text-form">The Fullerton Bay Hotel</h1>

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

    <h2 class="text-xs text-form mb-7px">
      80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)
    </h2>

    <p class="text-xs text-night mb-11px truncate">
      “Excellent boutique hotel. Great rooms in excellent location. Awesome
      vibe. Beautiful beac...
    </p>

    <Labels />

    <div class="flex items-center gap-x-11px">
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
