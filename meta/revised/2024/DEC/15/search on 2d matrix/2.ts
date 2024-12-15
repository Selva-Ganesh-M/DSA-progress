/**
Brute: Pretend it is aFlattened single list and perform binary search
TC: O(log n)
SC: O(1)
*/

function findMatrixCoOrdinates(mat: Array<Array<number>>, oneDIndex: number): { i: number, j: number } {
    let cols = mat[0].length
    return {
        i: Math.floor(oneDIndex / cols),
        j: Math.floor(oneDIndex % cols),
    }
}

function binarySearch(mat: Array<Array<number>>, target: number): number {
    let start: number = 0
    let end: number = (mat.length * mat[0].length) - 1;
    while (start <= end) {
        const mid = Math.floor((start + end) / 2)
        const { i, j } = findMatrixCoOrdinates(mat, mid)
        if (mat[i][j] == target) {
            return mid
        } else if (target < mat[i][j]) {
            end = mid - 1
        } else {
            start=mid+1
        }
    }
    return -1
}

function searchMatrix(matrix: number[][], target: number): boolean {

    const res = binarySearch(matrix, target)
    if (res===-1){
        return false
    }
    return true

};