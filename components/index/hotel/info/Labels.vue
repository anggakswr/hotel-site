<template>
  <div class="flex gap-x-5px mb-13px">
    <span class="border border-lightblue text-lightblue text-xs px-5px py-0.5">
      Breakfast
    </span>

    <span
      v-tooltip="'You have  new messages.'"
      class="border border-lightblue text-lightblue text-xs px-5px py-0.5"
    >
      +1
    </span>
  </div>
</template>

<script>
export default {
  name: 'HotelInfoLabels',
}
</script>
