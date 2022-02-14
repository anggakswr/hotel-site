<template>
  <div class="relative w-250px">
    <!-- search icon -->
    <div class="absolute inset-y-0 left-0 box-center pl-2.5">
      <img src="/img/form/search.png" alt="Search Place" />
    </div>

    <button
      class="w-full bg-white flex items-center justify-between h-50px rounded-3px pr-3 pl-34px border border-gray-brand"
    >
      <span class="text-sm text-form">Jul 19 - Jul 20</span>
      <span class="text-sm text-night">1 {{ $t('searchBar.night') }}</span>
    </button>
  </div>
</template>

<script>
export default {}
</script>
