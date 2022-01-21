function range(num) {
  wordArray = ["beep", "boop", "Won't you be my neighbor?"]
  let ans = [];
  let i = 0;
  for (let i = 0; i <= num; i++) {
      ans.push(i);
    }
    ans.forEach(function(number, index) {
        if (number.toString().includes("1")) {
            //ans.replace(wordArray[0])
             console.log("Condition1")
          } else if (number.toString().includes("2")) {
            console.log("Condition2")
          } else if (number.toString().includes("3")) {
            console.log("Condition3")
          }
      });
      
      return ans;
      
    };
    