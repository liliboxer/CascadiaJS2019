
function toWords(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let word;

  // 11-20
  if(number >= 11 && number <= 19 ) {
    const index = parseInt(number.toString().split('')[1])
    word = teens[index];
  }
  
  //1-10
  if (number >= 0 && number <= 10) {
    word = ones[number]
  }

  console.log(word)
  return word;
}

toWords(8)

// 0 - 10
// 11 - 20