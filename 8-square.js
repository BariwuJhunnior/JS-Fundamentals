const first_Arg = process.argv[2];
const num = parseInt(first_Arg);

if(!isNaN(num)){
  let row = "";
  let i = 0;

  while(i < num){
    row += 'X';
    i++;
  }

  let j = 0;
  while(j < num){
    console.log(row);
    j++;
  }
}
else{
  console.log("Missing size");
}