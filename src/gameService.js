const transpose = matrix => matrix[0].map((_, cell) => matrix.map(row => row[cell]));
const isWinRow = (board, symbol) => board.some(row => row.every(cell => cell === symbol));
const isWinLine = (board, symbol) => isWinRow(transpose(board), symbol);
const isWinDiagonal = (board, symbol) => {
  // @TODO: Find better solution;
  const transposeDiagonales = [
    [board[0][0], board[1][1], board[2][2]],
    [board[0][2], board[1][1], board[2][0]],
  ];

  return isWinRow(transposeDiagonales, symbol);
};

const isWin = (board, symbol) =>
  isWinRow(board, symbol) || isWinLine(board, symbol) || isWinDiagonal(board, symbol);

const isTie = board => !board.some(row => row.some(cell => cell === ''));

export const gameStatus = board => {
  if (isWin(board, 'X')) {
    return 'X';
  }

  if (isWin(board, 'O')) {
    return 'O';
  }

  if (isTie(board)) {
    return 'tie';
  }
};

export const saveGame = game => {
  window.localStorage.setItem('game', JSON.stringify(game));
};

export const getGame = () => {
  const game = window.localStorage.getItem('game');

  return game && JSON.parse(game);
};
