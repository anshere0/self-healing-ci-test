import { computeTotal } from "./helper.mjs";

const result = computeTotal(2, 3);
if (result !== 5) {
  console.error("Test failed: expected 5, got", result);
  process.exit(1);
}
console.log("All tests passed!");
