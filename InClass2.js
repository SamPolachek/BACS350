let n = prompt('Enter the number of terms: ');
console.log("Fibonacci Sequence:");
let x = 0;
let y = 1;
for (let i = 0; i < n; i++) {
    console.log(x);
    z = x + y;
    x = y;
    y = z;
}