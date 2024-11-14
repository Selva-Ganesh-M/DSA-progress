
# {
#     tc => O(n*n)
# }
class Solution:
    def bubbleSort(self, nums: List[int]) -> List[int]:
        for i in range(0, len(nums)-1):
            mini = i
            for j in range(i+1, len(nums)):
                if (nums[j]<nums[mini]):
                    mini = j
            nums[mini], nums[i] = nums[i], nums[mini]
        return nums
            
                