const DiamondHands = (prices) => {
    //variable to hold the buy price
    let boughtStock;
    //variable to hold the sell value
    let soldStock;
    //variable to hold gains
    let profit = 0;
    let initialProfit = []
    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i] < prices[i + 1]){
            boughtStock = prices[i + 1]
            console.log(boughtStock + ' bought')
            soldStock = prices[i];
            console.log(soldStock + ' sold')
            let tempProfit = boughtStock - soldStock;
            console.log(tempProfit + ' temp profit');
            initialProfit.push(tempProfit);
            console.log(initialProfit + ' array')
            profit = initialProfit.reduce((accumulator, value) => {
                return accumulator + value;
            });
            console.log(profit + ' test')
        }
    }
    return profit;
};


prices = [7,1,5,3,6,4];
console.log(DiamondHands(prices))