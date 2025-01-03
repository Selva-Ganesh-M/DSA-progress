/**
Brute: Iterate through every cell to find it
TC: O(m*n)
SC: O(1)
*/
function searchMatrix(matrix: number[][], target: number): boolean {

    for (let i=0; i<matrix.length; i++){
        for (let j=0; j<matrix[0].length; j++){
            if (matrix[i][j]==target) return true
        }
    }

    return false

};
