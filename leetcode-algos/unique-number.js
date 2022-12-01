const UniqueNumber = (nums) => {
    let obj = {}
    for(let i of nums){
        //to initiate the hash table no object yet so automatically sets every value to one
        if(!obj[i]){
            obj[i] = 1
        } else {
            //if the key already exists add 1 to its value
            obj[i] ++
        }
    }
    console.log(obj)
    for(let i in obj){
        if(obj[i] === 1){
            //will return only the key with a value of one
            return i
        }
    }
};

const nums = [2,2,1,2,1,2,1,2,2,3,1,1,1,1];
console.log(UniqueNumber(nums));
