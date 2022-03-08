<template>
  <button
    class="h-50px w-full px-15px flex items-center border-b border-gray-brand"
  >
    <img src="/img/form/search.png" alt="Search" class="mr-3.5" />

    <span class="flex flex-col">
      <span class="text-left text-sm font-bold">
        {{ $store.state.country || 'Singapore, Singapore' }}
      </span>

      <span>
        <span class="text-xs mr-5">Aug 18 - Aug 19</span>
        <span class="text-xs">
          2 {{ $t('searchBar.adults') }}, 1 {{ $t('searchBar.room') }}, 0
          {{ $t('searchBar.children') }}
        </span>
      </span>
    </span>
  </button>
</template>

<script>
export default {}
</script>
