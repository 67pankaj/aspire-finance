export function generateRandomCardDetails() {
  const cardNumber = [];
  const month = Math.ceil(Math.random() * 12) + "";
  const year = Math.ceil(23 + Math.random() * 10) + "";
  const cardThru = month.padStart(2, "0") + "/" + year;
  const cardProvider = Math.floor(Math.random() * 4);
  for (let i = 0; i < 4; ++i) {
    let numberPart = Math.floor(1000 + Math.random() * 9000) + "";
    cardNumber.push(numberPart);
  }
  return { cardNumber, cardThru, cardProvider };
}
