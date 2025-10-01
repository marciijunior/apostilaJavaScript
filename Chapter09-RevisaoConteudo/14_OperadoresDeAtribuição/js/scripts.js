let x = 1;
let y = 2;

console.log((x = x + y));

console.log((x += y));

console.log((x -= y));

console.log((x -= y));

console.log((x *= y));

console.log((x /= y));

console.log(x++);
console.log(x--);
console.log(--x);

while (x <= 100) {
  console.log(x);
  x *= 2;
}