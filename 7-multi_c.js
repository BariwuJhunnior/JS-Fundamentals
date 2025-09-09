const firstArg = process.argv[2];
const num = parseInt(firstArg);

if(!isNaN(num)) {
  let i = 0;

  while(i < num) {
    console.log("C is fun");
    i++;
  }
}else {
  console.log("Missing number of occurrences");
}