//even
// for(let i = 0;i < 20;i++){
//     if(i % 2 === 0){
//         console.log(i)
//     }
// }



//odd
// for(let i = 0;i < 20;i++){
//     if(i % 2 === 1){
//         console.log(i)
//     }
// }

//different way to odd
// for(let i = 0;i < 20;i++){
//     if(i % 2 !== 0){
//         console.log(i)
//     }
// }

// ------odd------
// for(let i = 1;i < 20;i+=2){
//     console.log(i)
// }

//-------even---------
// for(let i = 0;i < 20;i+=2){
//     console.log(i)
// }

//-----give me the number between 1 to 30 which is divisible by 5------
// for(let i = 1;i <= 30;i++){
//     if(i % 5 === 0){
//         console.log(i)
//     }
// }

//-----give me the number between 1 to 30 which is divisible by 3------
// for(let i = 1;i <= 30;i++){
//     if(i % 3 === 0){
//         console.log(i)
//     }
// }

//----3 or 5 divisible number---------
// for(let i = 1;i <= 30;i++){
//     if(i % 3 === 0 || i % 5 === 0){
//         console.log(i)
//     }
// }

// 3 and 5 divisible number from 1 to 30
// for(let i = 1;i <= 30;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i)
//     }
// }

// for(let i = 1;i <= 300;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log(i)
//     }
// }

//-------give me the sum of number between 1 to 30 which is divisible by 3--------
let sum = 0;
for(let i = 1;i <= 30; i++){
    if(i % 3 === 0){
        console.log(i);
        sum = sum + i;
        console.log('total',sum)
    }

}
console.log('total sum of numbers between from 1 to 30 is',sum)


