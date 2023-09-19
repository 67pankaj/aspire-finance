<template>
  <div class="sidebar q-pa-2xl">
    <q-img
      src="~assets/logo-brand.svg"
      fit="contain"
      position="0 0"
      height="36px"
      class="sidebar__logo q-mb-xs"
    />
    <div class="sidebar__headline text-white text-subtitle2 q-py-md">
      Trusted way of banking for 3,000+ SMEs and startups in Singapore
    </div>
    <div class="nav q-mt-xl">
      <q-list class="nav__list text-white">
        <q-item
          exact
          v-for="link in navLinks"
          :key="link.name"
          :to="{ name: link.name }"
          class="nav__item q-px-none q-py-xl"
          exact-active-class="text-secondary text-weight-bold"
        >
          <q-item-section avatar class="nav__icon">
            <q-icon :name="link.icon" />
          </q-item-section>

          <q-item-section class="nav__title">
            <q-item-label>{{ link.title }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>

<script setup>
import { navLinks } from "utils/initials";
</script>

<style lang="scss" scoped>
.sidebar {
  &__headline {
    opacity: 0.3;
  }
}
.nav {
  &__item {
    min-height: 2rem;
    :deep(.q-focus-helper) {
      visibility: hidden !important;
    }
  }
  &__icon {
    min-width: 1.5rem;
  }
}
</style>
