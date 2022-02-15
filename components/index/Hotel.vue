<template>
  <section class="w-full bg-white rounded-5px p-2.5 hover:shadow-lg">
    <div class="flex">
      <!-- img -->
      <div>
        <div
          class="big-img bg-cover bg-center mb-0.5"
          :style="{ backgroundImage: `url(https://picsum.photos/200/160)` }"
        />

        <div class="flex justify-between">
          <div
            v-for="number in 4"
            :key="'small-img-' + number"
            class="small-img w-12 h-12"
            :style="{ backgroundImage: `url(https://picsum.photos/48/48)` }"
          />
        </div>
      </div>

      <div class="w-full grid grid-cols-3">
        <!-- info -->
        <div class="col-span-2 p-15px">
          <!-- title & stars -->
          <div class="flex items-center gap-x-5px mb-5px">
            <h1 class="font-bold text-form">The Fullerton Bay Hotel</h1>

            <div class="flex gap-x-px">
              <img
                v-for="number in 5"
                :key="'star-rating-' + number"
                src="/img/sidebar/star.png"
                alt="Star Rating"
                width="12px"
              />
            </div>
          </div>

          <h2 class="text-xs text-form mb-7px">
            80 Collyer quay, Marina Bay, Singapore, Singapore, 049326 (view map)
          </h2>

          <p class="text-xs text-night mb-11px truncate">
            “Excellent boutique hotel. Great rooms in excellent location.
            Awesome vibe. Beautiful beac...
          </p>

          <div class="flex gap-x-5px mb-13px">
            <span
              class="border border-lightblue text-lightblue text-xs px-5px py-0.5"
            >
              Breakfast
            </span>

            <span
              class="border border-lightblue text-lightblue text-xs px-5px py-0.5"
            >
              + 1
            </span>
          </div>

          <div class="flex items-center gap-x-11px">
            <div>
              <img src="/img/index/protection.png" alt="Protection" />
            </div>

            <span class="text-xs text-form"> Singapore - SG Clean </span>
          </div>
        </div>

        <!-- rate img & price -->
        <div class="col-span-1 flex flex-col justify-between">
          <!-- dummy rating img -->
          <div>
            <img src="/img/index/excellent.png" alt="Dummy Rating" />
          </div>

          <!-- text below -->
          <div class="text-right">
            <span
              class="text-xs text-white font-bold bg-lightblue px-5px mb-5px"
            >
              SAVE 16% TODAY!
            </span>
            <p class="text-xs text-night">Nightly avg.</p>
            <p>
              <span class="text-xs text-night line-through">SGD 120</span>
              <span class="text-2xl font-bold">SGD 100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'IndexHotel',
}
</script>

<style scoped>
.big-img {
  width: 200px;
  height: 160px;
}
</style>
