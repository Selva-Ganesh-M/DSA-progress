function threeSum(nums: number[]): number[][] {
    const uniquePairs = new Set<string>()
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            for (let k=j+1; k<nums.length; k++){
                const sum = nums[i]+nums[j]+nums[k]
                if (sum==0){
                    const subArray = [nums[i], nums[j], nums[k]]
                    subArray.sort()
                    uniquePairs.add(JSON.stringify(subArray))
                }
            }
        }   
    }
    return Array.from(uniquePairs).map(item=>JSON.parse(item))
};