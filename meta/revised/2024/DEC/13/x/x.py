class Solution:

    def mark(self, matrix, i, j):
        rows = len(matrix)
        cols = len(matrix[0])

        # mark the row
        for col in range(0, cols):
            if matrix[i][col]==-1 and j!=col:
                continue
            matrix[i][col] = 0

        # mark the col
        for row in range(0, rows):
            if matrix[row][j]==-1 and i!=row:
                continue
            matrix[row][j] = 0

    def setZeroes(self, matrix: List[List[int]]) -> None:
        
        # marks each row 0 -> -1
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if (matrix[i][j]==0):
                    matrix[i][j]=-1
        
        # marks every cross as 0
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if (matrix[i][j]==-1):
                    self.mark(matrix, i, j)
        