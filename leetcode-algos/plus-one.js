const PlusOne = (digits) => {
    for(let i = digits.length -1; i >= 0; i-- ){
        if(digits[i] < 9){
            digits[i] ++
            return digits;
        } else {
            digits[i] = 0
        }
    }
    digits.unshift(1)
    return digits;
}

const digits = [9,9,9,8];
console.log(PlusOne(digits))

// const PlusOne = (digits) => {
//     for(i in digits){
//         if(digits[i] = 9){
//             digits = [1,0]
//         } 
//         if(i = digits.length - 1){
//             digits[i] ++
//         }
//     }
//     return digits;
// }

// const digits = [1,2,3,4,5];
// console.log(PlusOne(digits))