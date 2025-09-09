const argument = process.argv[2];

if(Number(argument)) {
  console.log(`My number: ${Number(argument)}`);
}
else {
  console.log('Not a number');
}