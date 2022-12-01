//remove duplicates from an array

// const arr = [1,1,2,1,1,1,2,3,4,5,1,1,];
// const removeDuplicates = (arr) => {
//     let noDuplicates = [];
//     const arrLength = arr.length;
//     if( arrLength === 0){
//         console.log("empty array")
//         return 0
//     } 
//     for (var i = 0; i < arr.length; i ++){
//         if(arr[i] !== arr[i +1]){
//             noDuplicates.push(arr[i])
//         }
//     }
//     return noDuplicates;
// };

// console.log(removeDuplicates(arr));

const RemoveDuplicates = (arr) => {
    let noDuplicates = []
    arr.map((n)=> {
        if(!noDuplicates.includes(n)){
            noDuplicates.push(n)
            console.log(noDuplicates + ' this works')
        }
    })
    return noDuplicates;
}
const arr = [4,1,2,1,2]
console.log(RemoveDuplicates(arr))


