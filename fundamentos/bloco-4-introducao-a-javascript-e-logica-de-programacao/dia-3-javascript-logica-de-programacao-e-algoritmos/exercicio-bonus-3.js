let n = 5;
let asteristico = '*';
let result = '';
let space = n - 1;

for (let index = 0; index < n; index += 1) {
  for (let index2 = 0; index2 < n; index2 += 1) {
    if (index2 < space) {
      result += ' ';
    }
    else {
      result += asteristico;
    }
  }

  console.log(result);
  result = '';
  space -= 1;
}