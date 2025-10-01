console.log("Com break:");

for (let i = 10; i > 0; i--) {
  console.log(i);

  if (i === 5) {
    break;
  }
}

console.log("Com continue:");

let x = 10;

while (x < 60) {
  x += 10;
  if (x === 50) {
    continue;
  }

  console.log(x);
}
