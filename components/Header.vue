<template>
  <!-- <header class="fixed z-10 top-0 inset-x-0"> -->
  <header>
    <!-- mobile nav -->
    <HeaderMobileNav />

    <!-- logo & btns (desktop) -->
    <nav
      class="fixed top-0 inset-x-0 white-nav bg-white hidden md:flex items-center justify-between px-145px duration-200"
    >
      <NuxtLink to="/">
        <img src="/img/logo.png" alt="Cloud Travel" />
      </NuxtLink>

      <div class="flex items-center gap-x-4">
        <select class="bg-white py-0 border-none">
          <option value="english">English</option>
        </select>

        <!-- <NuxtLink :to="switchLocalePath('sg')">Singapore</NuxtLink> -->

        <select v-model="currency" class="bg-white py-0 border-none">
          <option value="sg">SGD</option>
          <!-- <option value="en">USD</option> -->
        </select>

        <NuxtLink to="/"> {{ $t('header.myAcc') }} </NuxtLink>

        <button>
          {{ $t('header.logout') }}
        </button>
      </div>
    </nav>

    <!-- form (desktop) -->
    <nav
      class="fixed z-10 inset-x-0 bg-blue-brand px-145px py-2.5 hidden md:flex gap-x-2.5 duration-200"
      :class="{
        // hidden: hideWhiteNav,
        'top-0': isScrolled,
        'top-61px': !isScrolled,
      }"
    >
      <HeaderSearchInput />
      <HeaderDateFilter />
      <HeaderCapacityFilter />
      <HeaderSearchBtn />
    </nav>
  </header>
</template>

<script>
export default {
  name: 'DefaultHeader',
  data() {
    return {
      isScrolled: false,
      hideWhiteNav: false,
    }
  },
  computed: {
    currency: {
      get() {
        return this.$store.state.currency
      },
      set(val) {
        this.$store.commit('setCurrency', val)
      },
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScrollHandler)
  },
  methods: {
    onScrollHandler() {
      if (document.documentElement.scrollTop > 0) {
        this.isScrolled = true
        setTimeout(() => {
          this.hideWhiteNav = true
        }, 200)
      } else {
        this.isScrolled = false
        setTimeout(() => {
          this.hideWhiteNav = false
        }, 200)
      }
    },
  },
}
</script>

<style scoped>
.white-nav {
  padding-top: 13px;
  padding-bottom: 13px;
}

.top-61px {
  top: 61px;
}
</style>
