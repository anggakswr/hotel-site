<template>
  <section class="w-full box-between flex-col md:flex-row pagination">
    <div class="w-full box-between mb-18px">
      <button class="text-blue-brand" @click="scrollTop">Back to top</button>
      <p class="md:hidden">Showing Results 1 – 20 of 9999</p>
    </div>

    <!-- numbers -->
    <div class="box-between gap-x-19px text-form">
      <p class="hidden md:block">Showing Results 1 – 20 of 9999</p>

      <NuxtLink to="#" disabled>
        <img src="/img/index/arrow.png" alt="disabled-left-arrow" />
      </NuxtLink>

      <NuxtLink
        v-for="number in 6"
        :key="'page-' + number"
        to="#"
        class="box-center w-6 h-6"
        :class="{
          'bg-blue-brand rounded-5px text-white': number === 1,
        }"
      >
        {{ number }}
      </NuxtLink>

      <span class="box-center w-6 h-6"> ... </span>

      <NuxtLink to="#" class="box-center w-6 h-6"> 13 </NuxtLink>

      <NuxtLink to="#">
        <img src="/img/index/active-arrow.png" alt="right-arrow" />
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

<style scoped>
.pagination > * {
  @apply text-sm;
}
</style>
