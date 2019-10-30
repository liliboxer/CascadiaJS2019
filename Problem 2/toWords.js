
function toWords(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const teens = {
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty'
  }
  // const teens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty']
  let word;
  if(number >= 11 && number <= 20 ) {
    word = teens[number];
  }
  
  if (number >= 0 && number <= 10) {
    word = ones[number]
  }

  console.log(word)
  return word;
}

toWords(20)

// 0 - 10
// 11 - 20