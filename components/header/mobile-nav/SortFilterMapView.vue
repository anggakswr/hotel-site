<template>
  <section class="h-50px grid grid-cols-2">
    <button
      class="box-center text-sm text-blue-brand border-r border-gray-brand"
    >
      <img src="/img/header/filter.png" alt="Filter" class="mr-3" />
      <span>
        {{ $t('mobileNav.sortFilter') }}
      </span>
    </button>

    <button class="box-center text-sm text-blue-brand">
      <img src="/img/header/location.png" alt="Location" class="mr-3" />
      <span>
        {{ $t('mobileNav.mapView') }}
      </span>
    </button>
  </section>
</template>

<script>
export default {}
</script>
