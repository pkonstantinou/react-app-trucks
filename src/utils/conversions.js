export const numToEuroAmount = (num) => {
  const amountStr = num.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');

  return !amountStr ? '0 €' : `${amountStr} €`;
};
