<template>
  <div class="md:w-1/3 flex flex-col justify-between items-end pr-2.5 pb-2.5">
    <!-- dummy rating img -->
    <div class="hidden md:block">
      <img src="/img/index/excellent.png" alt="Dummy Rating" />
    </div>

    <!-- text below -->
    <div v-if="packages.length" class="text-right">
      <span
        v-if="isDiscount"
        class="text-10px md:text-xs text-white font-bold bg-lightblue px-5px mb-5px"
      >
        SAVE {{ discount }}% TODAY!
      </span>

      <p class="text-10px md:text-xs text-night">Nightly avg.</p>

      <p class="flex items-end">
        <span v-if="isDiscount" class="text-xs text-night line-through mb-1">
          <!-- SGD 120 -->
          {{ $n(displayRate, 'currency', currency) }}
        </span>

        <span
          class="text-10px md:text-2xl font-bold"
          :style="{ marginLeft: '3px' }"
        >
          <!-- SGD 100 -->
          {{ $n(adjustedDisplayRate, 'currency', currency) }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import currenyFormat from '@/mixins/currencyFormat'

export default {
  mixins: [currenyFormat],
  props: {
    packages: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    displayRate() {
      return this.packages[0].displayRate.value
    },
    adjustedDisplayRate() {
      return this.packages[0].adjustedDisplayRate.value
    },
    isDiscount() {
      return this.displayRate > this.adjustedDisplayRate
    },
    discount() {
      const minus = this.displayRate - this.adjustedDisplayRate
      const percentage = (minus / this.displayRate) * 100

      return percentage | 0
    },
  },
}
</script>
