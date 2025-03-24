export const checkWinningLines = (selectedCells: boolean[]): number => {
  const winningLines = [
    // Horizontal lines
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24],
    // Vertical lines
    [0, 5, 10, 15, 20],
    [1, 6, 11, 16, 21],
    [2, 7, 12, 17, 22],
    [3, 8, 13, 18, 23],
    [4, 9, 14, 19, 24],
    // Diagonal lines
    [0, 6, 12, 18, 24],
    [4, 8, 12, 16, 20],
  ];

  return winningLines.filter((line) =>
    line.every((index) => selectedCells[index])
  ).length;
};
