// export initial state data

export function getInitialUserCards() {
  return [
    {
      cardName: "Pankaj Mishra",
      cardNumber: ["1234", "2432", "5209", "2020"],
      cardThru: "12/27",
      cardProvider: 0,
      freezed: false,
    },
    {
      cardName: "Mark Henry",
      cardNumber: ["4405", "6121", "9210", "1880"],
      cardThru: "08/25",
      cardProvider: 2,
      freezed: false,
    },
    {
      cardName: "Steve Smith",
      cardNumber: ["5069", "9584", "2108", "9669"],
      cardThru: "11/32",
      cardProvider: 3,
      freezed: true,
    },
  ];
}
