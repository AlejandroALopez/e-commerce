// Use moneyFormatter.format(int) to conver an int to a string of type "$2,500.00"
export const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// uppercase first letter of word
export function firstLetterUpercase(word: string) {
  const firstLetterCap = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);
  return firstLetterCap + remainingLetters;
}
