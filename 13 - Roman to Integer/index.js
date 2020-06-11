// if I
// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

var romanToInt = function (s) {
  const dictionary = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let total = 0;
  const num = s.split('');

  for (i = 0; i < num.length; i++) {
    const currentR = dictionary[num[i]];
    const nextR = dictionary[num[i + 1]];
    console.log(currentR, nextR);
    if (nextR) {
      if (currentR < nextR) {
        total += nextR - currentR;
        i++;
      } else {
        total += currentR;
      }
    } else total += currentR;
  }

  return total;
};

console.log(romanToInt('IV'));
