<template>
  <div>
    <div
      class="w-100px md:w-200px h-full md:h-40 bg-cover bg-center mb-0.5"
      :style="{ backgroundImage: `url(${property.heroImage.url})` }"
    />

    <div class="hidden md:flex justify-between">
      <div
        v-for="img in smallImgs"
        :key="'small-img-' + img"
        class="small-img w-12 h-12"
        :style="{ backgroundImage: `url(${img})` }"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotelImgs',
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
  computed: {
    smallImgs() {
      const fourImgs = this.property.gallery.slice(0, 4)
      const arrOfStr = fourImgs.map((obj) => {
        let str = ''

        if (obj.xs && obj.xs.url) {
          str = obj.xs.url
        } else if (obj.s && obj.s.url) {
          str = obj.s.url
        } else if (obj.m && obj.m.url) {
          str = obj.m.url
        } else if (obj.l && obj.l.url) {
          str = obj.l.url
        } else {
          str = obj.xl.url
        }

        return str
      })

      return arrOfStr
    },
  },
}
</script>

<style scoped>
.big-img {
  width: 200px;
  height: 160px;
}
</style>
