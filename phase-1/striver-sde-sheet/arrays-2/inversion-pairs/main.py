def getInversions(arr, n):
    pairs = 0
    def mergeSort(nums, low, high):
        nonlocal pairs
        if low == high:
            return [nums[low]]
        
        mid = (low + high) // 2
        left = mergeSort(nums, low, mid)
        right = mergeSort(nums, mid + 1, high)
        
        i, j = 0, 0
        temp = []
        
        while i < len(left) and j < len(right):
            if left[i] <= right[j]:
                temp.append(left[i])
                i += 1
            else:
                pairs+=len(left)-1-i+1
                temp.append(right[j])
                j += 1
        
        while i < len(left):
            temp.append(left[i])
            i += 1
        
        while j < len(right):
            temp.append(right[j])
            j += 1
        
        return temp
    mergeSort(arr, 0, len(arr)-1)
    return pairs


