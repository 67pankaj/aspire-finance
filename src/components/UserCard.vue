<template>
  <div class="user-card">
    <div class="row justify-end">
      <div
        class="user-card__privacy row items-center q-pt-xs q-pb-lg text-caption text-secondary cursor-pointer"
        :class="[
          $q.screen.xs
            ? 'bg-white q-px-sm user-card__privacy--styled'
            : 'bg-transparent',
        ]"
        @click="togglePrivacy"
      >
        <q-icon :name="eye" size="16px" class="q-mx-2xs" />
        <span
          class="q-pl-xs"
          :class="[
            $q.screen.xs ? 'text-weight-semibold q-pr-2xs' : 'text-weight-bold',
          ]"
          >{{ cardNumberPrivacy ? "Show" : "Hide" }} card number</span
        >
      </div>
    </div>

    <q-card
      flat
      class="card-details rounded-borders-lg bg-secondary q-pa-lg text-white"
    >
      <!-- brand logo -->
      <div class="row justify-end" :class="[$q.screen.xs ? '' : 'q-pb-xs']">
        <q-icon
          :name="brandLogo"
          size="24px"
          class="card-details__logo"
          :class="[$q.screen.xs ? 'card-details__logo--mobile' : '']"
        />
      </div>

      <!-- card name -->
      <div
        class="card-name q-py-lg text-left text-weight-bold text-wide"
        :class="[$q.screen.xs ? 'text-h5' : 'text-h4']"
      >
        {{ cardName }}
      </div>

      <!-- card number -->
      <div
        class="card-number row items-center justify-start q-mb-xs"
        :class="[$q.screen.xs ? 'q-gutter-x-md' : 'q-gutter-x-lg']"
      >
        <div
          v-for="(section, index) in cardNumber"
          :key="index"
          class="card-number-section text-body1 text-weight-bold text-widest"
        >
          <div
            v-if="!cardNumberPrivacy || index == cardNumber.length - 1"
            class=" "
          >
            {{ section }}
          </div>
          <div v-else class="row items-center q-gutter-x-xs">
            <div
              v-for="i in 4"
              :key="`${index}${i}`"
              class="navigator bg-white q-mr-2xs"
            />
          </div>
        </div>
      </div>

      <!-- valid thru and cvv -->
      <div
        class="card-info row items-center text-body2 text-weight-bold q-mb-xs"
        :class="[$q.screen.xs ? 'q-pt-xs' : 'q-pt-sm']"
      >
        <div
          class="card-info__thru"
          :class="[$q.screen.xs ? 'q-pr-md' : 'q-pr-lg']"
        >
          <span>Thru: </span>
          <span class="text-wider">12/20</span>
        </div>
        <div class="card-info__cvv row items-center q-pl-md">
          <span>CVV:</span>
          <span
            class="flex flex-center q-ml-sm q-mt-xs text-h4 text-weight-semibold text-wider root-line-height"
          >
            ***
          </span>
        </div>
      </div>

      <!-- card provider -->
      <div class="row justify-end">
        <q-icon
          :name="visa"
          class="card-details__provider"
          :class="[$q.screen.xs ? 'card-details__provider--mobile' : '']"
        />
      </div>
    </q-card>
  </div>
</template>

<script setup>
import { eye, brandLogo, visa, mastercard, discover, amex } from "utils/icons";
import { ref } from "vue";

const cardNumberPrivacy = ref(true);

const cardName = "Pankaj Mishra";

const cardNumber = ["1234", "2432", "5209", "2020"];

function togglePrivacy() {
  cardNumberPrivacy.value = !cardNumberPrivacy.value;
}
</script>

<style lang="scss" scoped>
.user-card {
  &__privacy {
    &--styled {
      border-radius: 6px 6px 0 0;
    }
  }
}
.card-details {
  margin-top: -20px;
  box-sizing: border-box;
  min-width: 312px;
  max-width: 414px;
  &__logo {
    width: auto;
    height: 24px;
    &--mobile {
      height: 21px;
    }
  }
  &__provider {
    width: auto;
    height: 22px;
    &--mobile {
      height: 20px;
    }
  }
}
.card-number-section {
  min-width: 52px;
  max-width: 60px;
  flex: 1 1 auto;
  .navigator {
    opacity: 1;
  }
}
</style>
