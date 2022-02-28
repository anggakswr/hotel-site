<template>
  <div class="hidden md:flex gap-x-5px mb-13px">
    <span class="border border-lightblue text-lightblue text-xs px-5px py-0.5">
      Breakfast
    </span>

    <span
      v-tooltip.bottom="{ html: true, content: tooltipContent }"
      class="border border-lightblue text-lightblue text-xs px-5px py-0.5"
    >
      +1
    </span>
  </div>
</template>

<script>
export default {
  name: 'HotelInfoLabels',
  computed: {
    tooltipContent() {
      const words = [
        'Breakfast',
        'Free cancellation',
        'Pay later',
        'Pay at hotel',
      ]

      const opentag = '<div class="grid grid-cols-2">'
      const closetag = '</div>'
      let imgs = ''

      words.forEach((word) => {
        imgs += `
          <div class="flex items-center gap-x-2">
            <img src="/img/index/check.png" alt="Green Check" />
            ${word}
          </div>
        `
      })

      return opentag + imgs + closetag
    },
  },
}
</script>
