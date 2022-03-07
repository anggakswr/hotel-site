<template>
  <div class="hidden md:flex gap-x-5px mb-13px">
    <span
      v-for="word in words.slice(0, 3)"
      :key="'label-' + word"
      class="border border-lightblue text-lightblue text-xs px-5px py-0.5"
    >
      {{ word }}
    </span>

    <span
      v-if="words.length > 3"
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
  props: {
    item: {
      type: Array,
      required: true,
    },
  },
  computed: {
    words() {
      const words = []

      const item = this.item[0]

      if (item.foodCode) {
        words.push(this.renderFood(item.foodCode))
      }

      if (item.nonRefundable) {
        words.push('Free cancellation')
      }

      if (item.payLater) {
        words.push('Pay later')
      }

      if (item.payAtHotel) {
        words.push('Pay at hotel')
      }

      return words
    },
    tooltipContent() {
      const opentag = '<div class="grid grid-cols-2">'
      const closetag = '</div>'
      let imgs = ''

      this.words.forEach((word) => {
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
  methods: {
    renderFood(code) {
      const foods = ['Breakfast', 'Lunch', 'Dinner', 'Half board', 'Full board']

      return foods[code - 1]
    },
  },
}
</script>
