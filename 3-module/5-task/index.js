function getMinMax(str) {
  const nums = str
    .split(' ')
    .map(item => parseFloat(item))
    .filter(item => !isNaN(item));

  return {
    min: Math.min(...nums),
    max: Math.max(...nums)
  };
}
