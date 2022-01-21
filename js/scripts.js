function range(num) {
  let ans = [];
  let i = 0;
  for (let i = 0; i <= num; i++) {
      ans.push(i);
  }
  ans.forEach(function(element) {
    if (element.toString().includes("1")) {
      //element.replace("1", "Beep!")
      console.log("AHHH!!")
    } 
  });
  return ans;
};






function numberOfOccurrencesInText(word, text) {
  if (text.trim().length === 0) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}