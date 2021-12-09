// segregate the letters and repeat accordingly to each element.
/** example : 
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"*/

// function example
function accum(s) {
  const myArray = s
    .split("")
    .map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase()))
    .join("-");
  console.log(myArray);
}
accum("ZpglnRxqenU");

// other return
function accum(s) {
  const my_array = s.split("").map((x, index) => x.toUpperCase() + Array(index + 1).join(x.toLowerCase())).join("-")
  return my_array;
}
