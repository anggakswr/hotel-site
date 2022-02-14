<template>
  <button
    class="date-filter-btn bg-white flex items-center justify-between h-50px rounded-3px px-4 border border-gray-brand"
  >
    <span class="text-sm text-form"
      >2 {{ $t('searchBar.adults') }}, 0 {{ $t('searchBar.children') }}, 1
      {{ $t('searchBar.room') }}</span
    >
  </button>
</template>

<script>
export default {}
</script>

<style scoped>
.date-filter-btn {
  width: 250px;
}
</style>
