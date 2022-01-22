//userInput = 5
wordArray = ["beep", "boop", "Won't you be my neighbor?"]

function rangeMaker(number) {
    var range = [];
    for (let i = 0; i <= number; i++) {
        range.push(i);
    }
    return range;
}

function replacer(range) {
  let ans = [];
  let i = 0;
    for (let i = 0; i <= num; i++) {
      if (number.toString().includes("1")) {
        range[i] = wordArray[0]
        console.log("Condition1")
      } else if (number.toString().includes("2")) {
        range[i] = wordArray[1]
        console.log("Condition2")
      } else if (number.toString().includes("3")) {
        range[i] = wordArray[2]
        console.log("Condition3")
      } else {
        ans.push(range[i])
      }
       };
       console.log("Hey!")

      return ans;

  };
  
  //const range = rangeMaker(userInput)
  //const output = replacer(range);
  //console.log(output)