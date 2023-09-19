<template>
  <q-layout
    view="lHh Lpr lFf"
    class=""
    :class="[$q.screen.xs ? 'bg-primary text-white' : 'bg-white text-dark']"
  >
    <q-header v-if="$q.screen.sm" class="bg-transparent text-secondary q-pa-sm">
      <q-btn flat round :icon="home" aria-label="Menu" @click="toggleDrawer" />
    </q-header>
    <q-footer v-if="$q.screen.xs" class="bg-white app-footer">
      <AppBottomNavigation />
    </q-footer>

    <q-drawer
      v-if="$q.screen.gt.xs"
      v-model="drawerOpen"
      show-if-above
      class="bg-primary"
    >
      <AppSidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { home } from "utils/icons";
import { ref } from "vue";
import AppSidebar from "components/AppSidebar.vue";
import AppBottomNavigation from "components/AppBottomNavigation.vue";

const drawerOpen = ref(false);

function toggleDrawer() {
  drawerOpen.value = !drawerOpen.value;
}

const linksList = [
  {
    title: "Docs",
    caption: "quasar.dev",
    icon: "school",
    link: "https://quasar.dev",
  },
];
</script>

<style lang="scss" scoped>
.app-footer {
  box-shadow: 0 -3px 6px rgba(#000, 0.15);
}
</style>
