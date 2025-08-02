const person = {
    name : 'soumen',
    age : 25,
    profession : 'developer',
    salary : 250000,
    married : false,
    'fav place' : ['mountain','beach','temple','forest'],
}
person.salary = 40000000  //dot notation system
person['age'] = 49;   //bracket notation system
person['fav place'] = ['moldiv','srilonka','banglades']
// console.log(person);

// other type

const keyName = 'profession';
console.log(person[keyName])

// value set in different way
const propName ='profession';
person[propName] = 'devops'
console.log(person)
