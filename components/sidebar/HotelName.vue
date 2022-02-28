<template>
  <section class="bg-white rounded-5px p-5">
    <h1 class="text-sm font-bold mb-2">
      {{ $t('sidebar.hotelName') }}
    </h1>

    <div class="relative">
      <!-- search icon -->
      <div class="absolute inset-y-0 right-0 box-center pr-2.5">
        <img src="/img/form/search.png" alt="Search Place" />
      </div>

      <input
        type="text"
        class="w-250px h-10 border border-gray-brand rounded-3px py-2.5 pl-2.5 pr-10 text-sm"
        :placeholder="$t('sidebar.hotelPlaceholder')"
      />
    </div>
  </section>
</template>

<script>
export default {}
</script>
