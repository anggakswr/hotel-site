<template>
  <section class="box-center flex-col pt-34px md:pt-63px">
    <img src="/img/index/caution.png" alt="Error" class="mb-19px" />

    <p class="font-bold text-night text-sm md:text-base">
      Oops, something went wrong.
    </p>

    <p class="text-xs text-night text-center">{{ errmsg }}</p>
  </section>
</template>

<script>
export default {
  name: 'IndexPageError',
  props: {
    errmsg: {
      type: String,
      default: () => '',
    },
  },
}
</script>
