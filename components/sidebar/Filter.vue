<template>
  <section class="bg-white rounded-5px p-5">
    <div class="box-between mb-17px">
      <h1 class="text-sm font-bold">
        {{ title }}
      </h1>

      <button
        v-if="showClearBtn"
        id="clearBtn"
        class="text-xs font-bold text-blue-brand"
        @click="checkedItems = []"
      >
        CLEAR
      </button>
    </div>

    <div class="flex flex-col gap-y-2 5">
      <div
        v-for="checkbox in itemsFormatted"
        :key="'checkbox-' + checkbox.id"
        class="box-between"
      >
        <div class="box-between gap-x-2.5">
          <input
            :id="checkbox.id"
            v-model="checkedItems"
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

      <button
        v-if="firstShow && items.length > firstShow && !showAll"
        id="showMoreBtn"
        class="flex items-center gap-x-1"
        @click="showAll = true"
      >
        <span class="text-xs text-blue-brand">
          Show {{ items.length - firstShow }} more
        </span>

        <img src="/img/sidebar/triangle-down.png" alt="Triangle Down" />
      </button>

      <button
        v-if="firstShow && items.length > firstShow && showAll"
        id="showLessBtn"
        class="flex items-center gap-x-1"
        @click="showAll = false"
      >
        <span class="text-xs text-blue-brand"> Show less </span>

        <img
          src="/img/sidebar/triangle-down.png"
          alt="Triangle Up"
          class="transform rotate-180"
        />
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SidebarFilter',
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    queryKey: {
      type: String,
      required: true,
    },
    showClearBtn: {
      type: Boolean,
    },
    firstShow: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      checkedItems: [],
      showAll: false,
    }
  },
  computed: {
    itemsFormatted() {
      if (this.firstShow && !this.showAll) {
        return this.items.slice(0, this.firstShow)
      }

      return this.items
    },
  },
  watch: {
    checkedItems(newVal) {
      this.$router.push({
        query: { ...this.$route.query, [this.queryKey]: newVal },
      })
    },
  },
  mounted() {
    if (this.$route && this.$route.query) {
      const query = this.$route.query

      for (const prop in query) {
        if (Object.hasOwnProperty.call(query, prop)) {
          if (prop === this.queryKey) {
            if (typeof query[prop] === 'string') {
              this.checkedItems = [query[prop]]
            } else {
              this.checkedItems = query[prop]
            }
          }
        }
      }
    }
  },
}
</script>
