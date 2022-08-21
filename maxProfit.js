function getMaxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for(let i = 0; i < prices.length; i++) {
      const currentPrice = prices[i];
      minPrice = Math.min(minPrice, currentPrice);
      maxProfit = Math.max(maxProfit, currentPrice - minPrice);
  }
  
  return maxProfit;
}

getMaxProfit([1,2,3])