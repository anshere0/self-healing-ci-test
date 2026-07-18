// This file has a deliberate bug: wrong variable name
export const computeSum = (a, b) => a + b; // correct

// BUG: The test expects 'computeTotal' but we exported 'computeSum'
