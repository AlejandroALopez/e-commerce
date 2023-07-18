// Use moneyFormatter.format(int) to conver an int to a string of type "$2,500.00"
export const moneyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

// Format differences in money (e.g. 400 - 200 = +$200 more expensive)
export function costDifferenceFormatter(baseCost: number, comparative: number): string {
  const diff: number = comparative - baseCost;
  if (diff >= 0) {
    return "+" + moneyFormatter.format(diff);
  } else {
    return moneyFormatter.format(diff); // negative sign
  }
}

// uppercase first letter of word
export function firstLetterUpercase(word: string) {
  const firstLetterCap = word.charAt(0).toUpperCase();
  const remainingLetters = word.slice(1);
  return firstLetterCap + remainingLetters;
}