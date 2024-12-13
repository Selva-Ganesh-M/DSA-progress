class Solution:

    def setZeroes(self, matrix: List[List[int]]) -> None:
        rows = len(matrix)
        cols = len(matrix[0])
        colMarkers = [0 for i in range(cols)]
        rowMarkers = [0 for i in range(rows)]
        # marks each row 0 -> -1
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if (matrix[i][j]==0):
                    colMarkers[j]=1
                    rowMarkers[i]=1
        
        # marks every cross as 0
        for i in range(len(matrix)):
            for j in range(len(matrix[0])):
                if (rowMarkers[i]==1 or colMarkers[j]==1):
                    matrix[i][j] = 0
        