// Initial static data to be used across app

import {
  home,
  card,
  payment,
  credit,
  account,
  freezeCard,
  gpay,
  spendLimit,
  trash,
  replaceCard,
} from "./icons";

export const navLinks = [
  { name: "home", icon: home, title: "Home" },
  { name: "cards", icon: card, title: "Cards" },
  {
    name: "payments",
    icon: payment,
    title: "Payments",
  },
  {
    name: "credit",
    icon: credit,
    title: "Credit",
  },
  {
    name: "settings",
    icon: account,
    title: "Settings",
  },
];

export const cardActions = [
  { name: "freeze", icon: freezeCard, label: "Freeze card" },
  { name: "limit", icon: spendLimit, label: "Set spend limit" },
  {
    name: "gpay",
    icon: gpay,
    label: "Add to GPay",
  },
  {
    name: "replace",
    icon: replaceCard,
    label: "Replace card",
  },
  {
    name: "cancel",
    icon: trash,
    label: "Cancel card",
  },
];
