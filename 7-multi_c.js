
const first_Arg = process.argv[2];
const num = parseInt(first_Arg);
if (!isNaN(num)) {
  let i = 0;
  while (i < num) {
    console.log("C is fun");
    i++;
  }
} else {
  console.log("Missing number of occurrences");
}
