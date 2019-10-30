const data = require('./seed-data');

function skills(data) {
  let dictionary = {};
  let keys = [];
  
  // get nested skills into keys array for dictionary keys
  data.forEach(person => {
    keys.push(...person.skills);   
  });
  
  // set keys in dictionary
  keys.sort().forEach(skill => {
  dictionary[skill] = []
  })

  // loop through each person's skills and assign it to the proper key
  data.forEach(person => {
    person.skills.forEach((skill) => {
      if(keys.includes(skill)) {
        dictionary[skill].push(person.name)
      }
    })
  })

  console.log(dictionary)

  return dictionary;
}

skills(data)

// does john's skills include javascript 

// console.log('person', person.skills.includes(skill));