// ---- While ---- //

let x = 0;

while (x <= 5) {
  console.log("Testando repetição" + x);
  x++;
}

const arrAns = ["teste", "testando", "a", "b"];
let y = 0;

while (y <= 2) {
  console.log(arr[y]);
  y++;
}

const palavra = "Marcio";
let i = 0;

while (i < palavra.length) {
  console.log(palavra[i]);
  i++;
}

// ---- For ---- //

for (let i = 0; i < 10; i++) {
  console.log("Repetindo for:" + i);
}

const arrFor = [1, 2, 3, 4];

for (let j = 0; j < arrFor.length; j++) {
  console.log(arr[j]);
}

console.log(arrFor.length);

for (let x = 5; x < 100; x *= 3) {
  console.log(x);
}