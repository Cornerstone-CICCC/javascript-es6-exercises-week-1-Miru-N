const shirtWidth = 23;
const shirtLength = 30;
const shirtSleeve = 8.71;

if (
  shirtWidth === 18 && // Feedback: use size ranges, not only the exact chart number; S width is >= 18 and < 20.
  shirtLength === 28 && // Feedback: use ranges for length too; S length is >= 28 and < 29.
  shirtSleeve === 8.13 // Feedback: use ranges for sleeve too; S sleeve is >= 8.13 and < 8.38.
) {
  console.log("S");
} else if (
  shirtWidth === 20 &&
  shirtLength === 29 &&
  shirtSleeve === 8.38
) {
  console.log("M");
} else if (
  shirtWidth === 22 &&
  shirtLength === 30 &&
  shirtSleeve === 8.63
) {
  console.log("L");
} else if (
  shirtWidth === 24 &&
  shirtLength === 31 &&
  shirtSleeve === 8.88
) {
  console.log("XL");
} else if (
  shirtWidth === 26 &&
  shirtLength === 33 &&
  shirtSleeve === 9.63
) {
  console.log("2XL");
} else if (
  shirtWidth === 28 &&
  shirtLength === 34 &&
  shirtSleeve === 10.13
) {
  console.log("3XL");
} else {
  console.log("NA");
}
