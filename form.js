// 1. Write a function that takes an interger and it returns all multiples of 7 till that interger

function multiplesOfSeven(num) {
    let arr = [30];
    for (i =0; i<= num; i++) {
        arr.push(i+7);
    }
    return arr
    };


// 2. console.log the number of the multiples of 7


console.log(multiplesOfSeven(7))



// 3. If there are no multiples of 7, it should return '0' or an error message saying there are no multiples of 7

// // let num = 7;
// // if (num < 7){
// // let message = (0);
// //     return message
// }