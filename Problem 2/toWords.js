
function toWords(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let word;

  // 100 - 999
  if(number < 999) {
    const left = parseInt(number.toString().split('')[0])
    const middle = parseInt(number.toString().split('')[1])
    const right = parseInt(number.toString().split('')[2])
    word = `${ones[left]}-hundred-${tens[middle]}-${ones[right]}`;
  }

  // 20 - 99 
  if(number < 100) {
    const left = parseInt(number.toString().split('')[0])
    const right = parseInt(number.toString().split('')[1])
    word = `${tens[left]}-${ones[right]}`;
  }

  // 11-19
  if(number < 20) {
    const index = parseInt(number.toString().split('')[1])
    word = teens[index];
  }
  
  //1-10
  if (number < 11) {
    word = ones[number]
  }

  console.log(word)
  return word;
}

toWords(839)