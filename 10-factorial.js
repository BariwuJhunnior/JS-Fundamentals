function factorial(n) {
  n = parseInt(n);

  if(isNaN(n) || n <= 1) {
    return 1
  }
  else{
    return n * factorial(n - 1);
  }
}

const number = process.argv[2];

console.log(factorial(number));