
# {
#     tc -> O(1)
# }
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        best_price = float('inf')
        max_profit = float('-inf')
        for i in range(1, len(prices)):
            if (prices[i-1]<best_price):
                best_price = prices[i-1]
            if (prices[i]-best_price>max_profit):
                max_profit = prices[i]-best_price
        return(max_profit if max_profit>0 else 0)