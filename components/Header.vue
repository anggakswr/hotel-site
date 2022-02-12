<template>
  <header class="fixed top-0 inset-x-0">
    <!-- logo & btns -->
    <nav class="white-nav bg-white flex items-center justify-between px-145px">
      <NuxtLink to="/">
        <img src="/img/logo.png" alt="Cloud Travel" />
      </NuxtLink>

      <div class="flex items-center gap-x-4">
        <select class="bg-white">
          <option value="english">English</option>
        </select>

        <select class="bg-white">
          <option value="usd">USD</option>
        </select>

        <NuxtLink to="/"> My Account </NuxtLink>

        <button>Log out</button>
      </div>
    </nav>

    <!-- form -->
    <nav class="bg-blue-brand px-145px py-2.5 flex gap-x-2.5">
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
}
</script>

<style scoped>
.white-nav {
  padding-top: 13px;
  padding-bottom: 13px;
}
</style>
