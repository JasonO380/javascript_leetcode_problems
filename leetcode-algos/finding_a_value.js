//replacing the value based on conditon with a phrase
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const found = numbers.map(item => {
        if(item === 1){
            return (item = "Found ONE")
        }
        if(item !== 1 && item % 2 === 0){
            return ( item = "EVEN number")
        }
        if(item !== 1 && item % 2 !== 0){
            return(item = "ODD number")
        }
        else { return item }
    })
    console.log(found);

    