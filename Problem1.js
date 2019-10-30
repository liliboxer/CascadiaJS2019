const data = [
  {
  id: 0,
  name: "John",
  skills: ["javascript", "html", "css", "c#"]
},
{
  id: 1,
  name: "Brian",
  skills: ["javascript", "java", "c", "c#", "c++", "html"]
},
{
  id: 2,
  name: "Michael",
  skills: ["c", "c++", "go", "rust"]
}
]

function skills(data) {
// take in data
// return an object with the skills as keys
let dictionary = {};
let skills = []
data.forEach(person => {
  skills.push(...person.skills);   
});
skills.forEach(skill => {
 dictionary[skill] = 1;
})
console.log('hi');
// asign values to associated names
return dictionary;
}

skills(data)

// does john's skills include javascript 

// console.log('person', person.skills.includes(skill));