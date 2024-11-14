
# {
#     tc: O(n*n)
#     sc: O(n*n)
# }
mat = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]

# clock wise rotation
temp = [[0 for i in range(len(mat[0]))] for i in range(len(mat))]
for i in range(len(mat)):
    for j in range(len(mat[0])):
        temp[j][len(mat)-1-i] = mat[i][j]
        # or
        # temp[i][j] = mat[len(mat[0])-j-1][i]
print(temp)

# counter clockwise rotation
temp = [[0 for i in range(len(mat[0]))] for i in range(len(mat))]
for i in range(len(mat)):
    for j in range(len(mat[0])):
        temp[len(mat[0])-j-1][i] = mat[i][j]
print(temp)

# {
#     tc: O(n/2)
#     sc: O(1)
# }
class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        for i in range(len(matrix)):
            for j in range(i+1):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        for x in matrix:
            x.reverse()