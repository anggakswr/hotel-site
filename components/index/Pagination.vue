<template>
  <section class="w-full box-between flex-col md:flex-row">
    <div class="w-full md:w-auto box-between mb-18px md:mb-0">
      <button class="text-sm text-blue-brand" @click="scrollTop">
        <!-- Back to top -->
        {{ $t('pagination.backToTop') }}
      </button>

      <span class="text-sm md:hidden">
        {{ $t('pagination.showingResults') }} 1 – 20
        {{ $t('pagination.of') }} 9999
      </span>
    </div>

    <!-- numbers -->
    <div class="w-full md:w-auto box-between md:gap-x-19px text-form">
      <span class="text-sm hidden md:inline">
        {{ $t('pagination.showingResults') }} 1 – 20
        {{ $t('pagination.of') }} 9999
      </span>

      <NuxtLink to="#" disabled>
        <img src="/img/index/arrow.png" alt="Disabled Left Arrow" />
      </NuxtLink>

      <NuxtLink
        v-for="number in 6"
        :key="'page-' + number"
        to="#"
        class="text-sm box-center w-6 h-6"
        :class="{
          'bg-blue-brand rounded-5px text-white': number === 1,
        }"
      >
        {{ number }}
      </NuxtLink>

      <span class="text-sm box-center w-6 h-6"> ... </span>

      <NuxtLink to="#" class="text-sm box-center w-6 h-6"> 13 </NuxtLink>

      <NuxtLink to="#">
        <img src="/img/index/active-arrow.png" alt="Right Arrow" />
      </NuxtLink>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexPagination',
  methods: {
    scrollTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    },
  },
}
</script>
