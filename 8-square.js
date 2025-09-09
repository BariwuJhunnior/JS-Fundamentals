const first_Arg = process.argv[2];
const num = parseInt(first_Arg);

if(!isNaN(num)) {
  let row = '';

  for(let i = 0; i < num; i++) {
    row += "X";
  }
  for(let j = 0; j < num; j++){
    console.log(row);
  }
}else{
  console.log("Missing size");
}