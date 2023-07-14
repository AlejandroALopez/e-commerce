// Use moneyFormatter.format(int) to conver an int to a string of type "$2,500.00"
export const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
