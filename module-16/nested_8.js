const collage = {
    name : 'srsv',
    class : ['first year','second year','third year'],
    events : ['bijoy divas','fresers','farewell'],
    unique :{
        color : 'blue',
        flag : 'red blue white',
        result :{
            gpa : 5,
            merit : 'top,'
        }
    }
}
// console.log(collage)
// console.log(collage.events)
// console.log(collage.unique)
// console.log(collage.unique.color)
// console.log(collage.unique.result.gpa)
// collage.unique.result.merit = 'top top top top'  //(how to change data)
// console.log(collage.unique.result.merit)
// console.log(collage.events)
// collage.events[2] = '16 december'
// console.log(collage.events[2])
delete collage.name
console.log(collage)
