<template>
  <q-page class="column" :class="$q.screen.xs ? 'q-pa-lg' : 'q-pa-3xl'">
    <div class="q-pb-sm text-body1 text-weight-semibold text-left">
      Account balance
    </div>

    <!-- account balance and new card section -->
    <div class="flex justify-between">
      <div class="row items-center">
        <div
          class="rounded-borders bg-secondary text-white text-weight-bold q-px-sm q-py-xs q-mr-sm"
          :class="[$q.screen.xs ? 'text-caption' : 'text-body2']"
        >
          <span class="q-px-xs">S$</span>
        </div>
        <span class="q-ml-xs text-h5 text-weight-bold">3,000</span>
      </div>
      <q-btn
        :flat="$q.screen.xs"
        no-caps
        unelevated
        padding="8px 12px"
        color="primary-variant"
        :text-color="$q.screen.xs ? 'accent' : 'white'"
        class="rounded-borders"
      >
        <q-icon :name="add" size="16px" />
        <span class="text-body2 text-weight-bold q-ml-sm">New card</span>
      </q-btn>
    </div>

    <!-- cards tabs and panel section -->
    <div
      class="tabs col-grow column"
      :class="[$q.screen.xs ? 'q-pt-lg' : 'q-pt-xl']"
    >
      <!-- tabs -->
      <q-tabs
        v-model="cardPanel"
        dense
        no-caps
        :mobile-arrows="false"
        :outside-arrows="false"
        class="tabs__list"
        :class="[$q.screen.xs ? 'tabs__list--mobile text-white' : 'text-dark']"
        content-class="q-gutter-x-xl"
        :active-color="$q.screen.xs ? 'white' : 'dark'"
        active-class="tabs__item--active"
        indicator-color="accent"
        narrow-indicator
        align="left"
        :breakpoint="0"
      >
        <q-tab
          name="my-cards"
          label="My debit cards"
          class="tabs__item q-px-none"
          content-class="q-py-none"
          :ripple="false"
        />
        <q-tab
          name="company-cards"
          label="All company cards"
          class="tabs__item q-px-none"
          content-class="q-py-none"
          :ripple="false"
        />
      </q-tabs>

      <!-- panels content -->
      <q-card
        class="col-grow row panel-container q-mt-md"
        :class="[
          $q.screen.xs
            ? 'bg-transparent q-py-sm'
            : 'bg-white q-py-lg q-px-xl rounded-borders-md panel-container--styled',
        ]"
      >
        <q-tab-panels
          v-model="cardPanel"
          transition-prev="slide-right"
          transition-next="slide-left"
          animated
          class="col-grow row"
          :class="[
            $q.screen.xs ? 'text-white bg-transparent' : 'text-dark bg-white',
          ]"
        >
          <q-tab-panel
            name="my-cards"
            class="q-pa-none no-wrap"
            :class="[$q.screen.xs ? 'column' : 'row justify-between']"
          >
            <div class="col-auto column">
              <!-- cards carousel panel -->
              <q-carousel
                v-model="myCardSlider"
                transition-prev="scale"
                transition-next="scale"
                swipeable
                animated
                infinite
                :arrows="false"
                navigation
                height="auto"
                class="card-carousel bg-transparent"
              >
                <template v-slot:navigation-icon="{ active, onClick }">
                  <div
                    class="navigator q-mx-xs cursor-pointer"
                    :class="[active ? 'navigator--active' : '']"
                    @click="onClick"
                  />
                </template>

                <q-carousel-slide :name="0" class="q-pa-none">
                  <UserCard />
                </q-carousel-slide>
                <q-carousel-slide :name="1" class="q-pa-none">
                  <UserCard />
                </q-carousel-slide>
                <q-carousel-slide :name="2" class="q-pa-none">
                  <UserCard />
                </q-carousel-slide>
                <q-carousel-slide :name="3" class="q-pa-none">
                  <UserCard />
                </q-carousel-slide>
              </q-carousel>

              <!-- card actions -->
              <div
                class="actions q-pa-md row no-wrap items-start text-dark"
                :class="[
                  $q.screen.xs
                    ? 'rounded-borders-2xl actions--mobile'
                    : 'rounded-borders-xl',
                ]"
              >
                <div
                  v-for="(item, index) in cardActions"
                  :key="`action-${index}`"
                  class="actions__item col column flex-center q-pa-xs text-center cursor-pointer"
                >
                  <q-avatar
                    color="primary-variant"
                    :icon="item.icon"
                    size="32px"
                    :font-size="item.name == 'freeze' ? '16px' : '32px'"
                  />
                  <div class="q-pt-sm text-body2">
                    {{ item.label }}
                  </div>
                </div>
              </div>
            </div>

            <!-- card details and transactions -->
            <div
              class="col card-mixed-details"
              :class="[$q.screen.xs ? 'q-pt-lg' : 'q-pl-2xl']"
            >
              <!-- card details -->
              <div class="details-expansion">
                <q-expansion-item
                  class="expansion-wrapper rounded-borders-md bg-white"
                  header-class="expansion-header rounded-borders-md q-pa-lg"
                  expand-icon-class="expand-icon"
                >
                  <template v-slot:header>
                    <q-item-section avatar>
                      <q-icon :name="cardDetails" size="24px" />
                    </q-item-section>

                    <q-item-section
                      class="text-body1"
                      :class="[$q.screen.xs ? 'text-weight-semibold' : '']"
                    >
                      Card details
                    </q-item-section>
                  </template>

                  <div class="q-pa-lg">
                    <div class="row items-center text-body1">
                      <q-avatar
                        color="backdrop-green"
                        text-color="secondary"
                        icon="currency_exchange"
                        size="48px"
                        font-size="24px"
                        class="q-mr-xs"
                      />
                      <div class="q-px-sm col text-weight-semibold">
                        Spend limit
                      </div>
                      <div class="text-secondary text-weight-bold">
                        S$ 5,400
                      </div>
                    </div>
                    <div class="row items-center text-body1 q-mt-lg">
                      <q-avatar
                        color="primary-variant"
                        :icon="freezeCard"
                        size="48px"
                        font-size="24px"
                        class="q-mr-xs"
                      />
                      <div class="q-px-sm col column items-start">
                        <span class="text-weight-semibold">Freeze status</span>
                        <span class="text-body2 text-grey-6 q-mt-xs"
                          >Frozen</span
                        >
                      </div>
                      <q-btn
                        flat
                        no-caps
                        unelevated
                        padding="0 0"
                        color="primary-variant"
                        text-color="primary"
                        label="Unfreeze"
                        :ripple="false"
                        class="pure-flat text-weight-semibold"
                      />
                    </div>
                  </div>
                </q-expansion-item>
              </div>
              <div class="transaction-expansion q-mt-lg relative-position">
                <q-expansion-item
                  class="expansion-wrapper rounded-borders-md bg-white"
                  header-class="expansion-header rounded-borders-md q-pa-lg"
                  expand-icon-class="expand-icon"
                  default-opened
                  v-model="transactionsExpanded"
                >
                  <template v-slot:header>
                    <q-item-section avatar>
                      <q-icon :name="recentTransaction" size="24px" />
                    </q-item-section>

                    <q-item-section
                      class="text-body1"
                      :class="[$q.screen.xs ? 'text-weight-semibold' : '']"
                    >
                      Recent transactions
                    </q-item-section>
                  </template>

                  <div class="q-pa-lg">
                    <q-list separator>
                      <!-- transaction entry -->
                      <q-item class="column q-px-none q-pt-none q-pb-md">
                        <div class="row items-start text-body1">
                          <q-avatar
                            color="backdrop-blue"
                            text-color="info"
                            :icon="storage"
                            size="48px"
                            font-size="16px"
                            class="q-mr-xs"
                          />
                          <div class="q-px-sm q-mt-xs col column">
                            <span class="text-weight-semibold">Hamleys</span>
                            <span class="text-body2 text-grey-6 q-my-xs"
                              >20 May 2022</span
                            >
                          </div>
                          <div
                            class="q-mt-xs text-secondary text-weight-bold row items-center cursor-pointer"
                          >
                            <span>+ S$ 150</span>
                            <q-icon
                              name="arrow_forward_ios"
                              color="grey-4"
                              size="16px"
                              class="q-ml-sm"
                            />
                          </div>
                        </div>
                        <div
                          class="row items-center q-pl-3xl q-pt-sm text-primary-variant"
                        >
                          <div class="caption-icon-wrapper flex flex-center">
                            <q-icon
                              :name="cardPlain"
                              size="10px"
                              color="white"
                            />
                          </div>
                          <span
                            class="text-caption text-weight-semibold q-ml-sm"
                            >Refund on debit card</span
                          >
                        </div>
                      </q-item>

                      <!-- transaction entry -->
                      <q-item class="column q-px-none q-py-md">
                        <div class="row items-start text-body1">
                          <q-avatar
                            color="backdrop-green"
                            text-color="positive"
                            :icon="flight"
                            size="48px"
                            font-size="16px"
                            class="q-mr-xs"
                          />
                          <div class="q-px-sm q-mt-xs col column">
                            <span class="text-weight-semibold">Emirates</span>
                            <span class="text-body2 text-grey-6 q-my-xs"
                              >17 Dec 2022</span
                            >
                          </div>
                          <div
                            class="q-mt-xs text-dark text-weight-bold row items-center cursor-pointer"
                          >
                            <span>- S$ 350</span>
                            <q-icon
                              name="arrow_forward_ios"
                              color="grey-4"
                              size="16px"
                              class="q-ml-sm"
                            />
                          </div>
                        </div>
                        <div
                          class="row items-center q-pl-3xl q-pt-sm text-primary-variant"
                        >
                          <div class="caption-icon-wrapper flex flex-center">
                            <q-icon
                              :name="cardPlain"
                              size="10px"
                              color="white"
                            />
                          </div>
                          <span
                            class="text-caption text-weight-semibold q-ml-sm"
                            >Charged to debit card</span
                          >
                        </div>
                      </q-item>

                      <!-- transaction entry -->
                      <q-item class="column q-px-none q-py-md">
                        <div class="row items-start text-body1">
                          <q-avatar
                            color="backdrop-red"
                            text-color="negative"
                            :icon="megaphone"
                            size="48px"
                            font-size="16px"
                            class="q-mr-xs"
                          />
                          <div class="q-px-sm q-mt-xs col column">
                            <span class="text-weight-semibold"
                              >The Atlantic</span
                            >
                            <span class="text-body2 text-grey-6 q-my-xs"
                              >08 Mar 2023</span
                            >
                          </div>
                          <div
                            class="q-mt-xs text-dark text-weight-bold row items-center cursor-pointer"
                          >
                            <span>- S$ 180</span>
                            <q-icon
                              name="arrow_forward_ios"
                              color="grey-4"
                              size="16px"
                              class="q-ml-sm"
                            />
                          </div>
                        </div>
                        <div
                          class="row items-center q-pl-3xl q-pt-sm text-primary-variant"
                        >
                          <div class="caption-icon-wrapper flex flex-center">
                            <q-icon
                              :name="cardPlain"
                              size="10px"
                              color="white"
                            />
                          </div>
                          <span
                            class="text-caption text-weight-semibold q-ml-sm"
                            >Charged to debit card</span
                          >
                        </div>
                      </q-item>

                      <!-- transaction entry -->
                      <q-item class="column q-px-none q-pt-md q-pb-none">
                        <div class="row items-start text-body1">
                          <q-avatar
                            color="backdrop-blue"
                            text-color="info"
                            :icon="storage"
                            size="48px"
                            font-size="16px"
                            class="q-mr-xs"
                          />
                          <div class="q-px-sm q-mt-xs col column">
                            <span class="text-weight-semibold">Hamleys</span>
                            <span class="text-body2 text-grey-6 q-my-xs"
                              >28 Jun 2023</span
                            >
                          </div>
                          <div
                            class="q-mt-xs text-dark text-weight-bold row items-center cursor-pointer"
                          >
                            <span>- S$ 150</span>
                            <q-icon
                              name="arrow_forward_ios"
                              color="grey-4"
                              size="16px"
                              class="q-ml-sm"
                            />
                          </div>
                        </div>
                        <div
                          class="row items-center q-pl-3xl q-pt-sm text-primary-variant"
                        >
                          <div class="caption-icon-wrapper flex flex-center">
                            <q-icon
                              :name="cardPlain"
                              size="10px"
                              color="white"
                            />
                          </div>
                          <span
                            class="text-caption text-weight-semibold q-ml-sm"
                            >Charged to debit card</span
                          >
                        </div>
                      </q-item>
                    </q-list>
                  </div>
                </q-expansion-item>
                <div
                  class="view-all q-px-md q-pt-xl q-pb-md text-center text-secondary text-body2 text-weight-semibold relative-position"
                  :class="[!transactionsExpanded ? 'view-all--hidden' : '']"
                >
                  <span class="cursor-pointer">View all card transactions</span>
                </div>
              </div>
            </div>
          </q-tab-panel>

          <q-tab-panel name="company-cards" class="q-pa-none">
            <div class="text-h6">Coming Soon!!!</div>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import UserCard from "components/UserCard.vue";
import {
  add,
  cardDetails,
  cardPlain,
  freezeCard,
  storage,
  recentTransaction,
  flight,
  megaphone,
} from "utils/icons";
import { cardActions } from "utils/initials";
import { ref } from "vue";

const cardPanel = ref("my-cards");
const myCardSlider = ref(0);

const transactionsExpanded = ref(true);
</script>

<style lang="scss" scoped>
.panel-container {
  box-shadow: none;
  &--styled {
    box-shadow: 0px 2px 12px rgba(#000, 0.15);
    border: 1px solid $grey-1;
  }
}
.card-carousel {
  padding-bottom: 40px;
}
.tabs {
  &__list {
    :deep(.q-tab__label) {
      font-size: 0.875rem;
      line-height: 1.125rem;
      letter-spacing: 0.03125em;
      font-weight: 400;
      opacity: 0.5;
    }
    &--mobile {
      font-size: 0.8125rem;
      line-height: 1.125rem;
      letter-spacing: 0.01786em;
    }
  }
  &__item {
    :deep(.q-focus-helper) {
      visibility: hidden !important;
    }
    &--active {
      :deep(.q-tab__label) {
        opacity: 1;
        font-weight: 700;
      }
    }
  }
}

.actions {
  background: #edf3ff;
  min-width: 312px;
  max-width: 414px;
  &--mobile {
    margin-left: -24px;
    margin-right: -24px;
    max-width: 100vw;
  }
}

.card-mixed-details {
  max-width: 414px;
  box-sizing: content-box;
}

.details-expansion,
.transaction-expansion {
  z-index: 0;
  .expansion-wrapper {
    border: 1px solid $grey-3;
  }
  :deep(.expansion-header) {
    min-height: 24px;
    color: $primary;
    background: #f5f9ff;
    border: 1px solid $grey-2;
    box-shadow: 0 0 8px rgba(#000, 0.1);

    .q-focus-helper {
      visibility: hidden !important;
    }
    .q-item__section--avatar {
      min-width: 24px;
    }
    .q-item__section--avatar {
      padding-right: 12px;
    }
    .expand-icon {
      padding: 0;
      background-color: rgba($primary-variant, 0.15);
      border-radius: 24px;
      color: white;
    }
  }
  .caption-icon-wrapper {
    width: 24px;
    height: 20px;
    background: $primary-variant;
    border-radius: 24px;
  }
}
.view-all {
  background: #edfff5;
  border: 1px solid #ddffec;
  border-radius: 0 0 8px 8px;
  margin-top: -16px;
  opacity: 1;
  z-index: -1;
  transition-property: margin-top, opacity;
  transition-duration: 200ms;
  transition-timing-function: ease-in;
  &--hidden {
    margin-top: -72px;
    opacity: 0;
  }
}
</style>
