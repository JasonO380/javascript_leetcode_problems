const TwoSum = (nums, target) => {
    // set up two forLoops and have them continue when the inexes equal each other
    for (let i = 0; i < nums.length; i++) {
        for(let j = 0; j < nums.length; j ++){
            if(i === j){
                continue
            }
            if(nums[i] + nums[j] === target){
                return [i, j]
            }
        }
    }
};

const nums = [3,2,4,2,3,1,1,4,8];
const target = 9;
console.log(TwoSum(nums, target));
