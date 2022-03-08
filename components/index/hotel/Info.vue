<template>
  <div class="w-full p-2.5 md:p-15px">
    <!-- title & stars -->
    <div class="flex flex-col md:flex-row md:items-center gap-x-5px mb-5px">
      <h1 class="font-bold text-form text-sm md:text-base">
        <!-- The Fullerton Bay Hotel -->
        {{ property.name }}
      </h1>

      <div class="flex gap-x-px">
        <img
          v-for="number in Math.floor(property.starRating)"
          :key="'star-rating-' + number"
          src="/img/sidebar/star.png"
          alt="Star Rating"
          width="12px"
        />
      </div>
    </div>

    <h2 class="text-10px md:text-xs text-form mb-7px">
      <!-- 80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 -->
      {{ locationFormatted }}

      (<NuxtLink to="#" class="text-xs text-blue-brand">
        {{ $t('indexPage.viewMap') }} </NuxtLink
      >)
    </h2>

    <!-- mobile only -->
    <p class="text-10px md:hidden">
      <b class="text-10px">
        {{ property.starRating }}
        {{ $t('sidebar.label.' + starRatingFormatted) }}
      </b>

      ({{ property.trustYou.reviewsCount }} {{ $t('indexPage.reviews') }})
    </p>

    <p class="hidden md:block text-xs text-night mb-11px w-80 truncate">
      <!-- “Excellent boutique hotel. Great rooms in excellent location. Awesome
      vibe. Beautiful beac... -->
      {{ property.reviews ? property.reviews.summary.text : '' }}
    </p>

    <Labels v-if="packages.length" :item="packages" />

    <div
      v-if="property.reviews && property.reviews.covidSafety"
      class="hidden md:flex items-center gap-x-11px"
    >
      <div>
        <img src="/img/index/protection.png" alt="Protection" />
      </div>

      <span class="text-xs text-form"> Singapore - SG Clean </span>
    </div>
  </div>
</template>

<script>
import Labels from './info/Labels.vue'

export default {
  name: 'HotelInfo',
  components: {
    Labels,
  },
  props: {
    property: {
      type: Object,
      required: true,
    },
    packages: {
      type: Array,
      default: () => [],
    },
  },
  computed: {
    locationFormatted() {
      const { address, city, country, countryCode, postalCode } =
        this.property.location
      const countryNames = new Intl.DisplayNames(['en'], { type: 'region' })
      const countryFormatted = country ? countryNames.of(country) + ',' : ''

      return `${address}, ${city}, ${countryFormatted} ${countryNames.of(
        countryCode
      )}, ${postalCode}`
    },
    starRatingFormatted() {
      const val = this.property.starRating

      if (val > 4 && val < 5) {
        return 'Excellent'
      } else if (val > 3 && val < 4) {
        return 'Very Good'
      } else if (val > 2 && val < 3) {
        return 'Good'
      } else if (val > 1 && val < 2) {
        return 'Fair'
      } else {
        return 'Poor'
      }
    },
  },
}
</script>
