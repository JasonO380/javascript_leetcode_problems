// const Intersect = (nums1, nums2) => {
//     const arr1 = nums1.filter((item, index) => nums1.indexOf(item) !== index);
//     const arr2 = nums2.filter((item, index) => nums2.indexOf(item) !== index);
//     let newArray = [];
//     arr1.map(n=> {
//         if(arr2.includes(n)){
//             newArray.push(n)
//         }
//     })
//     arr2.map(n=>{
//         if(arr1.includes(n)){
//             newArray.push(n)
//         }
//     })
//     return newArray;
// };

// const nums1 = [1,2,2,1];
// const nums2 = [2,2];
// console.log(Intersect(nums1, nums2));

const Intersect =(nums1, nums2) => {
    let obj = {};
    let result = [];
    //make a hash map wirth the number of each value
    for(let i of nums1){
        if(!obj[i]){
            obj[i] = 1
        } else {
            obj[i] ++ 
        }
    }
    console.log(obj)
    //loop through the second array
    for(let i of nums2){
        //check to see if i exists in the object (hash map)
        if(obj[i] > 0){
            //if exists push out the value which is i
            result.push(i)
            //then decrease the hash map value
            
        }
    }
    return result;
}

const nums1 = [1,2,2,1];
const nums2 = [2,2];
console.log(Intersect(nums1, nums2));
