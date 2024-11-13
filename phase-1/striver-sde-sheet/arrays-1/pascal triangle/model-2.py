
# {
#     tc - O(n)
#     sc - O(1)
# }
def by_row(row):
    row = row - 1
    ans = [1]
    # loop here
    temp = ans[0]
    for i in range(0, row-1):
        temp = temp * ((row-i)/(i+1))
        ans.append(temp)
    if (row>0):
        ans.append(1)
    return ans

ans = by_row(11)
print(ans)

# {
#     tc - O(n)
#     sc - O(1)
# }
def print_pyramid(rows):
    for i in range(rows):
        print(by_row(i+1))

print(print_pyramid(10))