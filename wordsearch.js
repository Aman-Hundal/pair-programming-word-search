const transpose = function(matrix) {
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < i; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
    return matrix;
  };

const wordSearch = (letters, word) => {
    if (letters === []) {
        return false;
    }
    const horizontalJoin = letters.map(ls => ls.join(''));
    for (let item of horizontalJoin) {
        if (item.includes(word)) {
            return true;
        }
    }
    let transposedArray = transpose(letters);
    const verticalJoin = transposedArray.map(ls => ls.join(''));
    for (let item of verticalJoin) {
        if (item.includes(word)) {
            return true;
        }
    }
    return false;
};


module.exports = wordSearch;

console.log(wordSearch([
    ['A', 'W', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['S', 'E', 'I', 'N', 'F', 'E', 'L', 'D'],
    ['Y', 'F', 'C', 'F', 'Q', 'U', 'A', 'L'],
    ['H', 'M', 'J', 'T', 'E', 'V', 'R', 'G'],
    ['W', 'H', 'C', 'S', 'Y', 'E', 'R', 'L'],
    ['B', 'F', 'R', 'E', 'N', 'E', 'Y', 'B'],
    ['U', 'B', 'T', 'W', 'A', 'P', 'A', 'I'],
    ['O', 'D', 'C', 'A', 'K', 'U', 'A', 'S'],
    ['E', 'Z', 'K', 'F', 'Q', 'U', 'A', 'L'],
  ], 'SEINFELD'));