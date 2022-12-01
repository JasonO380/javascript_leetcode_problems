const RotateArray = (nums, k) => {
    let temp = [];
    for(let i = 0; i < k; i++){
        temp = nums.pop();
        nums.unshift(temp);
    } 
    return nums;
    
}

const nums = [1,2,3,4,5,6,7]
const k = 3;
console.log(RotateArray(nums, k))