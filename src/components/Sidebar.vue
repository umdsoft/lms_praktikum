<script setup>
import { ref, computed } from "vue";
import { Icon } from "@iconify/vue";
import { useSidebarStore } from "@/store/sidebar";
import { useRoute } from "vue-router";

const route = useRoute();

console.log(route);
const sidebarStore = useSidebarStore();

const sidebarMenu = ref([
  {
    name: "Bosh sahifa",
    url: "/",
    icon: "mingcute:home-3-fill",
  },
  {
    name: "Mening kurslarim",
    url: "/my-course",
    icon: "fluent:learning-app-24-filled",
  },

  {
    name: "Vakansiyalar",
    url: "/vacancy",
    icon: "hugeicons:job-share",
  },
]);
</script>

<template>
  <div>
    <div
      :class="sidebarStore.isSidebar ? 'left-0' : '-left-full '"
      class="fixed duration-300 p-5 top-0 w-72 h-screen z-50 bg-[#166199]"
    >
      <div>
        <img class="mx-auto" src="/logo.png" alt="" />
      </div>
      <div class="flex flex-col mt-10 gap-2">
        <router-link
          class="[&.router-link-exact-active]:bg-[#114E7B] flex items-center gap-2 text-white p-3 rounded-md hover:bg-[#114E7B]"
          v-for="(item, index) in sidebarMenu"
          :key="index"
          :to="item.url"
        >
          <Icon :icon="`${item.icon}`" width="26" height="26" />
          <p class="text-bold">{{ item.name }}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
