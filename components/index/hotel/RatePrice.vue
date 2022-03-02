<template>
  <div class="md:w-1/3 flex flex-col justify-between items-end pr-2.5 pb-2.5">
    <!-- dummy rating img -->
    <div class="hidden md:block">
      <img src="/img/index/excellent.png" alt="Dummy Rating" />
    </div>

    <!-- text below -->
    <div class="text-right">
      <span
        class="text-10px md:text-xs text-white font-bold bg-lightblue px-5px mb-5px"
      >
        SAVE 16% TODAY!
      </span>
      <p class="text-10px md:text-xs text-night">Nightly avg.</p>
      <p>
        <span class="text-xs text-night line-through">
          <!-- SGD 120 -->
          {{ $n(120, 'currency', currency) }}
        </span>
        <span class="text-10px md:text-2xl font-bold">
          <!-- SGD 100 -->
          {{ $n(100, 'currency', currency) }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
import currenyFormat from '@/mixins/currencyFormat'

export default {
  mixins: [currenyFormat],
}
</script>
