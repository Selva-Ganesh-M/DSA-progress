/**
 * Brute: just use i, j to find sum and return
 * TC: O(n**2)
 * SC: O(1)
 */

/**
 * Better: use an set lookup to find if number required to reach target already exists in the hash and return
 * TC: O(n (log n))
 * SC: O(n)
 */
// export function twoSum(nums: number[], target: number): number[] {
//     const map = new Map<number, number>();
//     for (let i=0; i<nums.length; i++){
//         const lookup = target - nums[i]
//         if (map.has(lookup)){
//             return [map.get(lookup), i]
//         }
//         map.set(nums[i], i)
//     }
//     return [-1, -1]
// };

/**
 * Optimal approach
 * Sort and use i (move towards right) & j (moves towards left) to match the target value by sum
 * TC: sorting: O(n log n) + traverse: O(n)
 * NOTE: this can only be used to return if such a pair exists. Not to find indexes, cause the sorting will manipulate the indexes
 */
export function twoSum(nums: number[], target: number): [i: number, j: number]|void{
    nums.sort((a,b)=>a-b)
    let i: number = 0
    let j: number = nums.length-1
    while (i<j){
        const sum: number = nums[i]+nums[j]
        if (sum==target){
            return [i, j]
        }else if (sum<target){
            i++
        }else{
            j--
        }
    }
}