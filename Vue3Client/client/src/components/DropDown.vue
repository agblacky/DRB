<template>
  <div class="relative inline-block text-left">
    <button
      type="button"
      class="bg-neutral p-3 rounded-md text-white space-y-1"
      @click="dropdown = !dropdown"
    >
      <span
        :class="`block w-5 h-0.5 ${options.color} ${options.bgColor}`"
        v-for="index of 3"
        :key="index"
      ></span>
    </button>
    <div
      class="fixed left-0 top-0 z-0 w-screen h-screen"
      v-bind:class="{
        visible: dropdown,
        'opacity-100': dropdown,
        invisible: !dropdown,
        'opacity-0': !dropdown,
      }"
      @click="dropdown = false"
    >
      <div
        class="absolute transition-all right-2 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-4 ring-secondary"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabindex="-1"
        v-bind:class="{
          visible: dropdown,
          'opacity-100': dropdown,
          invisible: !dropdown,
          'opacity-0': !dropdown,
        }"
      >
        <div
          class="py-1 flex flex-row flex-nowrap items-center justify-between"
          role="none"
        >
          <!-- Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700" -->
          <p class="text-text block px-4 py-2">Navigation</p>
          <i class="mr-7 text-accent">X</i>
        </div>
        <div class="py-1" role="none">
          <!-- Enumerate through custom list to ensure reusabilty -->
          <router-link
            v-for="(route, index) in options.content"
            :key="route.path"
            :to="route.path"
            class="text-text block px-4 py-2 text-sm hover:bg-secondary hover:bg-opacity-25"
            role="menuitem"
            tabindex="-1"
            :id="`menu-item-${index}`"
            @click="dropdown = !dropdown"
            >{{ route.name }}</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { RouteRecordName } from "vue-router";

export default defineComponent({
  data() {
    return {
      dropdown: false,
    };
  },
  props: {
    options: {
      type: Object as PropType<{
        content: Array<{ path: string; name: RouteRecordName | undefined }>;
        bgColor: string;
        color: string;
      }>,
      required: true,
    },
  },
});
</script>

<style scoped></style>
