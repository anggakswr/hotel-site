<template>
  <div>
    <div
      class="w-100px md:w-200px h-full md:h-40 bg-cover bg-center mb-0.5"
      :style="{ backgroundImage: `url(https://picsum.photos/200/160)` }"
    />

    <div class="hidden md:flex justify-between">
      <div
        v-for="number in 4"
        :key="'small-img-' + number"
        class="small-img w-12 h-12"
        :style="{ backgroundImage: `url(https://picsum.photos/48/48)` }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelImgs',
}
</script>

<style scoped>
.big-img {
  width: 200px;
  height: 160px;
}
</style>
