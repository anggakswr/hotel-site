<template>
  <div class="relative flex-1">
    <!-- search icon -->
    <div class="absolute inset-y-0 left-0 box-center pl-2.5">
      <img src="/img/form/search.png" alt="Search Place" />
    </div>

    <input
      type="text"
      class="w-full h-50px rounded-3px pr-18px pl-34px border border-gray-brand text-sm text-form"
      placeholder="Singapore, Singapore"
      @focus="getHotels"
    />
  </div>
</template>

<script>
export default {
  methods: {
    async getHotels() {
      try {
        const res = await this.$axios.get('/api/job01/autosuggest')
        // const res = await this.$axios.get(
        //   'https://hiring.zumata.xyz/job01/autosuggest'
        // )
        console.log('getHotels', res.data)
      } catch {
        // do nothing
      }
    },
  },
}
</script>
