class Solution:

    def setZeroes(self, matrix: List[List[int]]) -> None:
        rows = len(matrix)
        cols = len(matrix[0])
        colZero=1
        # marks each row 0 -> -1
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if (matrix[i][j]==0):

                    # marks columns
                    if (j==0):
                        colZero = 0
                    else:
                        matrix[0][j]=0

                    matrix[i][0] = 0


        
        # marks the 1 level inner matrix
        for i in range(1, rows):
            for j in range(1, cols):
                if (matrix[i][0]==0 or matrix[0][j]==0):
                    matrix[i][j]=0

        # marks the first row
        for j in range (cols-1, -1, -1):
            if (matrix[0][j]!=0 and matrix[0][0]==0):
                matrix[0][j] = 0

        # marks the first column
        for i in range(rows-1, -1, -1):
            if (matrix[i][0]!=0 and colZero==0):
                matrix[i][0] = 0
                    
        