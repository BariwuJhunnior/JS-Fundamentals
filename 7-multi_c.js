const firstArg = process.argv[2];
const num = parseInt(firstArg);
if (!isNaN(num)) {
  let output = '';
  for (let i = 0; i < num; i++) {
    output += 'C is fun';
  }
  console.log(output);
} else {
  console.log('Missing number of occurrences');
}

/* Where x is the first argument of the script
If the first argument can’t be converted to an integer, print “Missing number of occurrences”
You must use console.log(...) to print all output
You are not allowed to use var
You can use only two console.log
You must use a loop (while, for, etc.) */
