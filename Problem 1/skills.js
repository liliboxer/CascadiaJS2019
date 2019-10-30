const data = require('./seed-data');

function skills(data) {
  // take in data
  let dictionary = {};
  let keys = [];
  
  // get nested skills into skills array
  data.forEach(person => {
    keys.push(...person.skills);   
  });
  
  // set up dictionary keys 
  // return an object with the skills as keys
  keys.sort().forEach(skill => {
  dictionary[skill] = 1;
  })

  data.forEach(person => {
    console.log(person.skills)

  })
  console.log(dictionary)

  // asign values to associated keys
  return dictionary;
}

skills(data)

// does john's skills include javascript 

// console.log('person', person.skills.includes(skill));