
function toWords(number) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
  const teens = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let word;
  let thousand;
  let hundred;
  let ten;
  let one;

  // 1,000 - 9,999
  if(number < 9999) {
    thousand = parseInt(number.toString().split('')[0]);
    hundred = parseInt(number.toString().split('')[1]);
    ten = parseInt(number.toString().split('')[2]);
    one = parseInt(number.toString().split('')[3]);

    word = `${ones[thousand]}-thousand-${ones[hundred]}-hundred-${tens[ten]}-${ones[one]}`
    
    if(hundred === 0) {
      word = `${ones[thousand]}-thousand-${tens[ten]}-${ones[one]}`
    }
   
    if(hundred === 0 && ten === 0 ) {
      word = `${ones[thousand]}-thousand-${ones[one]}`
    }
  }

  // 100 - 999
  if(number < 1000) {
    hundred = parseInt(number.toString().split('')[0])
    ten = parseInt(number.toString().split('')[1])
    one = parseInt(number.toString().split('')[2])
    word = `${ones[hundred]}-hundred-${tens[ten]}-${ones[one]}`;
  }

  // 20 - 99 
  if(number < 100) {
    ten = parseInt(number.toString().split('')[0])
    one = parseInt(number.toString().split('')[1])
    word = `${tens[ten]}-${ones[one]}`;
  }

  // 11-19
  if(number < 20) {
    index = parseInt(number.toString().split('')[1])
    word = teens[index];
  }
  
  //1-10
  if (number < 11) {
    word = ones[number]
  }

  console.log(word)
  return word;
}

toWords(7001)