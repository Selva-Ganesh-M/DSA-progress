class Solution:
    def reversePairs(self, nums: List[int]) -> int:
        pairs = 0
        def mergeSort(nums, low, high):
            nonlocal pairs
            if low == high:
                return [nums[low]]
            
            mid = (low + high) // 2
            left = mergeSort(nums, low, mid)
            right = mergeSort(nums, mid + 1, high)
            
            # counting pairs
            j = 0
            for i in range(len(left)):
                while(j<len(right) and left[i] > 2 * right[j]):
                    j+=1
                pairs+=j

            i, j = 0, 0
            temp = []
            
            while i < len(left) and j < len(right):
                if left[i] <= right[j]:
                    temp.append(left[i])
                    i += 1
                else:
                    
                    temp.append(right[j])
                    j += 1
            
            while i < len(left):
                temp.append(left[i])
                i += 1
            
            while j < len(right):
                temp.append(right[j])
                j += 1
            
            return temp
        mergeSort(nums, 0, len(nums)-1)
        return pairs


