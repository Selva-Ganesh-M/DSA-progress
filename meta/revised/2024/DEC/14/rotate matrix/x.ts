
/**
 * Right => Transpose + reverse col list of ever row
 * Left => Transpose + reverse the row list
 */
export function rotateMatrix(mat: Array<Array<number>>){
    
    let rows = mat.length
    let cols = mat[0].length

    // transpose the matrix
    for (let i=0; i<rows; i++){
        for (let j=i+1; j<cols; j++){
                let temp = mat[i][j]
                mat[i][j]=mat[j][i]
                mat[j][i]=temp
        }
    }

    // reversing every row
    for (let row of mat){
        row.reverse()
    }

}

const mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
rotateMatrix(mat)
console.log(mat)