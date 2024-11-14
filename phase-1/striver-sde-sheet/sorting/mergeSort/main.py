def ms(arr):
    if len(arr) <= 1:  # Base case for both empty and single-element arrays
        return arr
    
    mid = len(arr) // 2  # Compute mid index
    left = ms(arr[:mid])  # Recursively sort the left half
    right = ms(arr[mid:])  # Recursively sort the right half
    
    ans = []
    while left and right:  # Merge the two sorted halves
        if left[0] < right[0]:
            ans.append(left.pop(0))
        else:
            ans.append(right.pop(0))
    
    # Extend the remaining elements (either left or right)
    ans.extend(left)
    ans.extend(right)
    return ans

# Test
arr = [8, 7, 6, 5, 4, 3, 2, 1]
print(ms(arr))  # Output should be [1, 2, 3, 4, 5, 6, 7, 8]
