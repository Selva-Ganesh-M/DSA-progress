function threeSum(nums: number[]): number[][] {
    const ans: Array<Array<number>> = []
    nums.sort((a, b)=>a-b) // n log n
    let i = 0
    while (i<nums.length-2 ){
        let j = i+1
        let k = nums.length-1
        while (j<k){
            let temp = nums[i]+nums[j]+nums[k]
            if (temp==0){
                ans.push([nums[i], nums[j], nums[k]])
                const currJVal = nums[j]
                while(j<k && nums[j]==currJVal){
                    j+=1
                }
                const currKVal = nums[k]
                while(j<k && nums[k]==currKVal){
                    k-=1
                }
            }else if (temp<0){
                const currJVal = nums[j]
                while(j<k && nums[j]==currJVal){
                    j+=1
                }
            }else{
                const currKVal = nums[k]
                while(j<k && nums[k]==currKVal){
                    k-=1
                }
            }
        }
        const currIValue = nums[i]
        while (i<nums.length-2 && currIValue==nums[i]){
            i++
        }
    }
    return ans

};