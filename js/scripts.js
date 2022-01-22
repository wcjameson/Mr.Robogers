
wordArray = ["beep", "boop", "Won't you be my neighbor?"]

function rangeMaker(number) {
    var range = [];
    for (let i = 0; i <= number; i++) {
        range.push(i);
    }
    return range;
}

function replacer(range) {
  let output = [];
    for (let i = 0; i < range.length; i++) {
      console.log(range[i])
      if (i.toString().split('').includes("3")) {
        output.push(wordArray[2])
      } else if (i.toString().split('').includes("2")) {
        output.push(wordArray[1])
      } else if (i.toString().split('').includes("1")) {
        output.push(wordArray[0])
      } else {
        output.push(i.toString())
      }
    };

      return output;

  };


$(document).ready(function(){
  $("form#number-input").submit(function(event){
    event.preventDefault();
    const number = $("#number").val();
    const rangeOfNumbers = rangeMaker(number)
    const output = replacer(rangeOfNumbers);
    
    $("#answer").text(output);
  });
});
