<template>
  <aside class="sidebar flex flex-col gap-y-7px">
    <!-- map -->
    <SidebarMap />

    <!-- price per night filter (range slider) -->
    <SidebarPriceFilter />
  </aside>
</template>

<script>
export default {
  name: 'DefaultSidebar',
}
</script>

<style scoped>
.sidebar {
  width: 290px;
}
</style>
