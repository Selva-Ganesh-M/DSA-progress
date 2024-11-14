class Solution:
    def nextPermutation(self, nums: List[int]) -> None:
        dip = -1

        # find dip
        for i in range(len(nums)-2, -1, -1):
            if (nums[i]<nums[i+1]):
                dip = i
                break

        if dip==-1:
            nums.reverse()
            return

        # find swap loc to swap with dip
        swap_loc = dip+1
        for i in range(dip+1, len(nums)):
            if (nums[dip]<nums[i]<nums[swap_loc]):
                swap_loc = i
        nums[dip], nums[swap_loc] = nums[swap_loc], nums[dip]

        nums[dip+1:] = sorted(nums[dip+1:])
