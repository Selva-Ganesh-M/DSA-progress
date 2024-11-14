
# {
#     tc - 2n
#     sc - O(1)
# }
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        sum_0 = 0
        sum_1 = 0
        sum_2 = 0
        for i in range(len(nums)):
            curr = nums[i]
            if (curr == 0):
                sum_0+=1
            if (curr == 1):
                sum_1+=1
            if (curr == 2):
                sum_2+=1
        if (sum_0>0):
            for i in range(sum_0):
                nums[i] = 0
        if (sum_1>0):
            for i in range(sum_0, sum_0+sum_1):
                nums[i] = 1
        if (sum_2>0):
            for i in range(sum_0+sum_1, len(nums)):
                nums[i] = 2

# {
#     tc - n
#     sc - O(1)
# }
class Solution:
    def sortColors(self, nums: List[int]) -> None:
        start=0
        end=len(nums)-1
        mid=0
        while (mid<=end):
            curr = nums[mid]
            if (curr==0):
                nums[mid], nums[start] = nums[start], nums[mid]
                start +=1 
                mid +=1
            elif (curr==1):
                mid+=1
            elif (curr==2):
                nums[mid], nums[end] = nums[end], nums[mid]
                end-=1
