/**
 * 
 * @param i 
 * @param j 
 * @param m 
 * @param n 
 * @param dp 
 * @returns 
 * TC - O(m*n)
 * SC - O(m*n)
 */
function recursiveSoln(i: number, j: number, m: number, n: number, dp: Map<string, number>): number {

    if (i==m-1 && j==n-1){
        return 1
    }

    if (i>m-1 || j>n-1){
        return 0
    }

    let bottomRoute = dp.get(`${i+1}-${j}`)
    if (!bottomRoute){
        const ans = recursiveSoln(i+1, j, m, n, dp)
        dp.set(`${i+1}-${j}`, ans)
        bottomRoute = ans
    }
    let rightRoute = dp.get(`${i}-${j+1}`)
    if (!rightRoute){
        const ans = recursiveSoln(i, j+1, m, n, dp)
        dp.set(`${i}-${j+1}`, ans)
        rightRoute = ans
    }

    return bottomRoute + rightRoute

}

function uniquePaths(m: number, n: number): number {
    
    const dp = new Map<string, number>()

    return recursiveSoln(0, 0, m, n, dp)

};