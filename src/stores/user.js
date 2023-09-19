import { defineStore } from "pinia";
import { generateRandomCardDetails } from "utils/helpers";
import { getInitialUserCards } from "utils/states";

export const useUserStore = defineStore("counter", {
  state: () => ({
    userCards: getInitialUserCards(),
  }),
  actions: {
    addCard(cardName) {
      const { cardNumber, cardThru, cardProvider } =
        generateRandomCardDetails();
      this.userCards = [
        ...this.userCards,
        { cardName, cardNumber, cardThru, cardProvider },
      ];
    },
    replaceCard(cardName, index) {
      const { cardNumber, cardThru, cardProvider } =
        generateRandomCardDetails();
      this.userCards.splice(index, 1, {
        cardName,
        cardNumber,
        cardThru,
        cardProvider,
      });
      this.userCards = [...this.userCards];
    },
    removeCard(index) {
      this.userCards.splice(index, 1);
      this.userCards = [...this.userCards];
    },
    toggleCardFreeze(index) {
      this.userCards[index].freezed = !this.userCards[index].freezed;
      this.userCards = [...this.userCards];
    },
  },
});
