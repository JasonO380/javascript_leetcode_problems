// const MoveZeros = (nums) => {
//     let temp = [];
//     const length = nums.length;
//     for(let i = 0; i < length; i++){
//         if(nums[i] === 0){
//             temp.push(nums[i])
//         } 
//     }
//     console.log(temp)
//     const noZeros = nums.filter((item, index) => nums.indexOf(item) !== 0)
//     const answer = noZeros.concat(temp);
//     console.log(answer)
//     return answer;
// }

// const nums = [0,1,0,3,12];
// console.log(MoveZeros(nums))

const MoveZeros = (nums) => {
    let index =0;
    for(let i = 0; i < nums.length; i++){
        //create an index counter
        const num = nums[i];
        //checks each index and keeps the non zero values
        if(num !== 0){
            nums[index] = num
            index++
        }
    }
    //once all the indexes are count the rest of the indexes are filled with 0
    for(let i = index; i < nums.length; i ++){
        console.log(i)
        nums[i] = 0
    }
    return nums
}

const nums = [0,1,0,3,12];
console.log(MoveZeros(nums));