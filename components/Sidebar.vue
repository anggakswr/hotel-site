<template>
  <aside
    class="md:flex flex-col"
    :style="{ marginBottom: '86px' }"
    :class="{
      flex: popupOn,
      'hidden sidebar gap-y-7px': !popupOn,
    }"
  >
    <!-- map -->
    <SidebarMap v-if="!popupOn" />

    <!-- price per night filter (range slider) -->
    <SidebarPricePerNight />

    <!-- reviews filter -->
    <SidebarFilter
      title="Reviews"
      :items="[
        { id: 'excellent', label: 'Excellent' },
        { id: 'veryGood', label: 'Very Good' },
        { id: 'good', label: 'Good' },
        { id: 'fair', label: 'Fair' },
        { id: 'poor', label: 'Poor' },
        { id: 'noReview', label: 'No review' },
      ]"
      query-key="reviews"
      show-clear-btn
    />

    <!-- star rating filter -->
    <SidebarStarRating />

    <!-- hotel name -->
    <SidebarHotelName />

    <!-- reservation policy filter -->
    <SidebarFilter
      title="Reservation policy"
      :items="[
        { id: 'freeCancellation', label: 'Free cancellation' },
        { id: 'bnpl', label: 'Book now, pay later' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
      ]"
      query-key="reservationPolicy"
    />

    <!-- meal plan filter -->
    <SidebarFilter
      title="Meal plan"
      :items="[
        { id: 'roomOnly', label: 'Room only' },
        { id: 'breakfast', label: 'Breakfast' },
        { id: 'lunch', label: 'Lunch' },
        { id: 'dinner', label: 'Dinner' },
        { id: 'halfBoard', label: 'Half board' },
        { id: 'fullBoard', label: 'Full board' },
        { id: 'allInclusive', label: 'All inclusive' },
      ]"
      query-key="mealPlan"
      :first-show="2"
    />

    <!-- property type filter -->
    <SidebarFilter
      title="Property type"
      :items="[
        { id: 'hotel', label: 'Hotel' },
        { id: 'hostel', label: 'Hostel / Backpacker accomodation' },
        { id: 'apartment', label: 'Apartment' },
        { id: 'aparthotel', label: 'Aparthotel' },
        { id: 'resort', label: 'Resort' },
        { id: 'inn', label: 'Inn' },
        { id: 'motel', label: 'Motel' },
        { id: 'bedBreakfast', label: 'Bed & breakfast' },
        { id: 'guesthouse', label: 'Guesthouse' },
        { id: 'condo', label: 'Condo' },
        { id: 'allInclusiveProperty', label: 'All-inclusive property' },
        { id: 'hostal', label: 'Hostal' },
      ]"
      query-key="propertyType"
      :first-show="3"
    />

    <!-- facilities filter -->
    <SidebarFilter
      title="Facilities"
      :items="[
        { id: 'swimmingPool', label: 'Swimming Pool' },
        { id: 'internetAccess', label: 'Internet Access' },
        { id: 'nonSmokingFloor', label: 'Non Smoking Floor' },
        ...additionalFacilities,
      ]"
      query-key="facilities"
      :first-show="3"
    />
  </aside>
</template>

<script>
const additionalFacilities = []

for (let i = 0; i < 26; i++) {
  additionalFacilities.push({ id: i, label: i })
}

export default {
  name: 'DefaultSidebar',
  props: {
    popupOn: {
      type: Boolean,
    },
  },
  data() {
    return {
      additionalFacilities,
    }
  },
}
</script>

<style scoped>
.sidebar {
  width: 290px;
}
</style>
