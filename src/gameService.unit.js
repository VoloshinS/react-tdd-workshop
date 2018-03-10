const { gameStatus } = require('./gameService');

describe('Game in process', () => {
  test('status should not be returned', () => {
    const board = [['X', 'X', ''], ['', '', ''], ['', '', '']];
    expect(gameStatus(board)).not.toBeDefined();
  });
});

describe('Game completed', () => {
  describe('when line completed', () => {
    test('X should win', () => {
      const board = [['X', 'X', 'X'], ['', '', ''], ['', '', '']];
      expect(gameStatus(board)).toBe('X');
    });

    test('X should win', () => {
      const board = [['', '', ''], ['X', 'X', 'X'], ['', '', '']];
      expect(gameStatus(board)).toBe('X');
    });

    test('X should win', () => {
      const board = [['', '', ''], ['', '', ''], ['X', 'X', 'X']];
      expect(gameStatus(board)).toBe('X');
    });
  });

  describe('when column completed', () => {
    test('X should win', () => {
      const board = [['X', '', ''], ['X', '', ''], ['X', '', '']];
      expect(gameStatus(board)).toBe('X');
    });

    test('X should win', () => {
      const board = [['', 'X', ''], ['', 'X', ''], ['', 'X', '']];
      expect(gameStatus(board)).toBe('X');
    });

    test('X should win', () => {
      const board = [['', '', 'X'], ['', '', 'X'], ['', '', 'X']];
      expect(gameStatus(board)).toBe('X');
    });
  });

  describe('when diagonal completed', () => {
    test('X should win', () => {
      const board = [['X', '', ''], ['', 'X', ''], ['', '', 'X']];
      expect(gameStatus(board)).toBe('X');
    });

    test('X should win', () => {
      const board = [['', '', 'X'], ['', 'X', ''], ['X', '', '']];
      expect(gameStatus(board)).toBe('X');
    });
  });

  test('should be tie', () => {
    const board = [['O', 'O', 'X'], ['X', 'X', 'O'], ['O', 'X', 'O']];
    expect(gameStatus(board)).toBe('tie');
  });
});
