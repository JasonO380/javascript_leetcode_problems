// const containsDuplicates = (nums) => {
//     return new Set(nums).size !== nums.length
// }

// const nums = [1,2,3,]
// console.log(containsDuplicates(nums))

const containsDuplicates = (nums) => {
    let noDuplicates = []
    nums.map((n)=> {
        if(!noDuplicates.includes(n)){
            noDuplicates.push(n)
            console.log(noDuplicates + ' this works')
        }
    })
    return nums.length !== noDuplicates.length;
}

const nums = [1,2,3,1]
console.log(containsDuplicates(nums))