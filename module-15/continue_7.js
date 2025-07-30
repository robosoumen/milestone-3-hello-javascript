//break ---> loop end
//continue ---> skip rest of the code for this one(iteration)

// for(let i = 1;i < 10;i++){
//     if(i % 2 === 0){
//         continue;
//     }
//     console.log(i)
// }

// ----------------- continue using for loop -------------
// for(let i = 1;i < 10;i++){
//     if(i % 2 === 1){
//         continue;
//     }
//     console.log(i)
// }

//---------continue using while loop --------------
// let i = 0;
// while(i < 20){
//     i++;
//     if(i % 5 === 0){
//         continue;
//     }
//     console.log(i)
// }

//-------------------
let i = 0;
while(i < 20){
    i++;
    if(i % 5 !== 0){
        continue;
    }
    console.log(i)
}