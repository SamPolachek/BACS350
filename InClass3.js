function isEven(n) {
    if(n < 0) {
        n = n * -1;
    }

    if(n % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
console.log(isEven(-2));