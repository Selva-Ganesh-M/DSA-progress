/*
Replace find with a hash map lookup for better tc
 */

function longestConsecutive(nums: number[]): number {
    let max = 0
    let count = 0
    for (let i=0; i<nums.length; i++){
        let curr = nums[i]
        count = 0
        const isPrev = nums.find(item => item == curr-1)
        if (isPrev){
            continue
        }
        while(curr!=undefined || curr!=null){
            count+=1
            curr = nums.find(item => item == curr+1)
        }
        if (count > max){
            max = count
        }
    }  
    return max
};