<template>
  <section class="bg-white rounded-5px p-5">
    <div class="box-between mb-17px">
      <h1 class="text-sm font-bold">Star rating</h1>

      <button
        id="clearBtn"
        class="text-xs font-bold text-blue-brand"
        @click="checkedStarRatings = []"
      >
        <!-- CLEAR -->
        {{ $t('sidebar.clear') }}
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
            v-model="checkedStarRatings"
            :value="checkbox.id"
            type="checkbox"
            class="text-blue-brand"
          />
          <label :for="checkbox.id" class="text-xs text-form">
            <template v-if="checkbox.label">
              {{ $t('sidebar.noRating') }}
            </template>

            <span v-else class="flex">
              <img
                v-for="number in checkbox.id"
                :key="'star-' + number"
                src="/img/sidebar/star.png"
                alt="Rating"
              />
            </span>
          </label>
        </div>

        <span class="text-xs text-night">999</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      checkboxes: [
        { id: 5, label: '' },
        { id: 4, label: '' },
        { id: 3, label: '' },
        { id: 2, label: '' },
        { id: 1, label: '' },
        { id: 'noReview', label: 'No rating' },
      ],
      checkedStarRatings: [],
    }
  },
}
</script>
