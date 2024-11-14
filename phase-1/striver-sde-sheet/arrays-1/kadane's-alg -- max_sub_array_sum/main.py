
# {
#     tc - O(n**3),
#     sc - O(1)
# }
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        _sum = float('-inf')
        for i in range(len(nums)):
            for j in range(i, len(nums)):
                temp_sum=0
                for k in range(i, j+1):
                    temp_sum+=nums[k]
                if (temp_sum>_sum):
                    _sum = temp_sum
        return _sum


# {
#     tc - O(n**2),
#     sc - O(1)
# }
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        _sum = float('-inf')
        for i in range(len(nums)):
            temp_sum=0
            for j in range(i, len(nums)):
                temp_sum+=nums[j]
                if (temp_sum>_sum):
                    _sum = temp_sum
        return _sum

# {
#     name: Kandane's alg
#     tc - O(n),
#     sc - O(1)
# }
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        _max = float('-inf')
        _sum = 0
        for i in range(len(nums)):
            _sum+=nums[i]
            if (_sum > _max):
                _max = _sum
            if (_sum<0):
                _sum = 0
        return _max
            