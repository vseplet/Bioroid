export function generateZeroArray(rows: number, cols: number): number[][] {
  const zeroArray: number[][] = [];

  for (let i = 0; i < rows; i++) {
    zeroArray.push(Array(cols).fill(-1));
  }

  return zeroArray;
}
