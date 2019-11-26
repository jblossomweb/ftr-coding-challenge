// the fibonacci question: the basic answer is recursion.
export const getFibonacci = (
  n: number,
) => {
  if (n === 1) {
    return [0, 1];
  }
  const sequence: number[] = getFibonacci(n - 1);
  const lastNumber: number = sequence[sequence.length - 1];
  const previousNumber: number = sequence[sequence.length - 2];
  const nextNumber: number = lastNumber + previousNumber;
  sequence.push(nextNumber);
  return sequence;
};

// extra credit: memoize it.
export const getFibonacciMemoized = (
  n: number,
  cache: {
    [key: number]: number[],
  } = {
    1: [0, 1],
  },
) => {
  if (cache[n]) {
    return cache[n];
  }
  const sequence: number[] = getFibonacciMemoized(n - 1, cache);
  const lastNumber: number = sequence[sequence.length - 1];
  const previousNumber: number = sequence[sequence.length - 2];
  const nextNumber: number = lastNumber + previousNumber;
  sequence.push(nextNumber);
  cache[n] = sequence;
  return sequence;
};

export default getFibonacciMemoized;
