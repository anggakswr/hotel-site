<template>
  <section class="bg-white rounded-5px p-5">
    <div class="box-between mb-17px">
      <h1 class="text-sm font-bold">Reviews</h1>

      <button
        id="clearBtn"
        class="text-xs font-bold text-blue-brand"
        @click="checkedReviews = []"
      >
        CLEAR
      </button>
    </div>

    <div class="flex flex-col gap-y-2 5">
      <div
        v-for="checkbox in checkboxes"
        :key="'checkbox-' + checkbox.id"
        class="box-between"
      >
        <div class="box-between gap-x-2.5">
          <input
            :id="checkbox.id"
            v-model="checkedReviews"
            :value="checkbox.id"
            type="checkbox"
            class="text-blue-brand"
          />
          <label :for="checkbox.id" class="text-xs text-form">
            {{ checkbox.label }}
          </label>
        </div>

        <span class="text-xs text-night">999</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SidebarReviews',
  data() {
    return {
      checkboxes: [
        { id: 'excellent', label: 'Excellent' },
        { id: 'veryGood', label: 'Very Good' },
        { id: 'good', label: 'Good' },
        { id: 'fair', label: 'Fair' },
        { id: 'poor', label: 'Poor' },
        { id: 'noReview', label: 'No review' },
      ],
      checkedReviews: [],
    }
  },
}
</script>
