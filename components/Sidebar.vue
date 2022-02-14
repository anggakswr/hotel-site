<template>
  <aside class="sidebar flex flex-col gap-y-7px">
    <!-- map -->
    <SidebarMap />

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
        ...additionalMealPlan,
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
        ...additionalPropertyType,
      ]"
      query-key="propertyType"
      :first-show="3"
    />

    <!-- facilities filter -->
    <SidebarFilter
      title="Facilities"
      :items="[
        { id: 'hotel', label: 'Hotel' },
        { id: 'hostel', label: 'Hostel / Backpacker accomodation' },
        { id: 'apartment', label: 'Apartment' },
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
  data() {
    return {
      additionalMealPlan: [
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
      ],
      additionalPropertyType: [
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
        { id: 'payAtHotel', label: 'Pay at hotel' },
      ],
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
