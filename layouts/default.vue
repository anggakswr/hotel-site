<template>
  <div class="bg min-h-screen pt-145px px-115px">
    <Header />
    <div class="flex gap-x-4">
      <Sidebar />
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style scoped>
.bg {
  background-color: #e5e5e5;
}
</style>
