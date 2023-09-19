<template>
  <div class="nav">
    <q-tabs
      no-caps
      dense
      :mobile-arrows="false"
      :outside-arrows="false"
      align="justify"
      :breakpoint="0"
      indicator-color="transparent"
      class="nav__list text-grey-5 text-small"
    >
      <q-route-tab
        exact
        v-for="link in navLinks"
        :key="link.name"
        :to="{ name: link.name }"
        :label="link.title"
        :icon="link.icon"
        class="nav__item q-px-sm q-py-xs"
        exact-active-class="nav__item--active text-secondary"
      />
    </q-tabs>
  </div>
</template>

<script setup>
import { navLinks } from "utils/initials";
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    flex: 1 1 0;
    :deep(.q-tab__label) {
      font-size: 0.625rem;
      line-height: 1rem;
      font-weight: 400;
    }
    &--active {
      :deep(.q-tab__label) {
        font-weight: 700;
      }
    }
  }
}
</style>
