const person = {
    name : 'soumen',
    age : 25,
    profession : 'developer',
    salary : 250000,
    married : false,
    'fav place' : ['mountain','beach','temple','forest'],
}
// console.log(person);

//  1st system - dot notation
// console.log(person.married);
const income = person.salary;
// console.log(income);

// 2nd system - bracket notation 
// console.log(person['age'])
const boyos = person['age']
// console.log(boyos)

// console.log(person.'fav place')
console.log(person['fav place'])