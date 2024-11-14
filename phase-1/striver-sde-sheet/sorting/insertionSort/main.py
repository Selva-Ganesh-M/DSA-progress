class Solution:
    def sortArray(self, nums: List[int]) -> List[int]:
        for i in range(1, len(nums)):
            temp = nums[i]
            j = i - 1
            # Shift elements greater than temp to the right
            while j >= 0 and nums[j] > temp:
                nums[j + 1] = nums[j]
                j -= 1
            # Insert temp into its correct position
            nums[j + 1] = temp
        return nums
