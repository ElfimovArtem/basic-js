module.exports = function countCats(matrix) {
  return matrix.reduce((acc, cV) => acc + cV.reduce((sum, n) => sum + ((n === "^^") ? 1 : 0), 0), 0);
};
