<template>
  <section class="rounded-5px overflow-hidden relative">
    <!-- bg img -->
    <img src="/img/sidebar/map.jpg" alt="Show Map" />

    <!-- btn -->
    <div class="absolute inset-0 box-center">
      <button
        class="bg-blue-brand text-white text-sm font-bold rounded-3px py-3 px-38px"
      >
        Show on map
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SidebarMap',
}
</script>
