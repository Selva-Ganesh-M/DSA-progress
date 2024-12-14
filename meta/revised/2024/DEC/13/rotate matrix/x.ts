
/**
 * i, j => row-1-j, i
 */
function rotateMatrixClockWise(
    args: {
        mat: Array<Array<number>>
    }
) {

    const {mat} = args

    const rows = mat.length
    const cols = mat[0].length

    /**
     * Generates the new matrix
     */
    const newMat: Array<Array<number>> = []
    for (let i=0; i<cols; i++){
        const row: Array<number> = []
        for (let j=0; j<rows; j++){
            row.push(0)
        }
        newMat.push(row)
    }

    /**
     * Populating the new matrix
     */
    for (let i=0; i<cols; i++){
        for (let j=0; j<rows; j++){
            newMat[i][j] = mat[rows-1-j][i]
        }
    }

    return newMat

}

/**
 * i, j => j, col-1-i
 */
function rotateMatrixCounterClockWise(
    args: {
        mat: Array<Array<number>>
    }
) {

    const {mat} = args

    const rows = mat.length
    const cols = mat[0].length

    /**
     * Generates the new matrix
     */
    const newMat: Array<Array<number>> = []
    for (let i=0; i<cols; i++){
        const row: Array<number> = []
        for (let j=0; j<rows; j++){
            row.push(0)
        }
        newMat.push(row)
    }

    /**
     * Populating the new matrix
     */
    for (let i=0; i<cols; i++){
        for (let j=0; j<rows; j++){
            newMat[i][j] = mat[j][cols-1-i]
        }
    }

    return newMat

}

function rotateMatrix(
    args: {
        mat: Array<Array<number>>
        direction: "cw"|"ccw",
        angle: "90"
    }
){

    const {
        mat,
        direction,
        angle
    } = args

    switch(direction){
        case 'cw':
            return rotateMatrixClockWise({mat})
        case 'ccw':
            return rotateMatrixCounterClockWise({mat})
    }

    return mat
}


const mat = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [10,11,12],
    [13,14,15]
]
console.log(rotateMatrix({
    angle: "90",
    direction: "cw",
    mat
}))
console.log(rotateMatrix({
    angle: "90",
    direction: "ccw",
    mat
}))