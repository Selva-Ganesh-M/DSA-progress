/**
 * 
 * @param m 
 * @param n 
 * @returns 
 * 
 * Works: calcuating the number of rights + bottoms required to reach the destination. 
 * Let's say 3 rights and 2 bottoms needed, now pick 5 places _ _ _ _ _, find either where to place 3 rights or where to place 2 lefts an fill the other with the latter
 * Just perform a nCr and get the results. 
 */
function uniquePaths(m: number, n: number): number {
    
    const N = m + n -2
    const r = m - 1
    let ans = 1
    for (let i = 1; i<=r; i++){
        ans  = ans * (N - r + i) / i 
    }
    return ans

};