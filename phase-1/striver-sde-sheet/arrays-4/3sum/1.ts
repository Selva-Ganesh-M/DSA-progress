function threeSum(nums: number[]): number[][] {
    const uniquePairs = new Set<string>()
    const visited = new Set<number>()
    for (let i=0; i<nums.length; i++){
        for (let j=i+1; j<nums.length; j++){
            const expect = - ( nums[i]+nums[j] )
            if (visited.has(expect)){
                const temp = [nums[i], nums[j], expect]
                temp.sort()
                uniquePairs.add(JSON.stringify(temp))
            }
            visited.add(nums[j])
        }   
        visited.clear()
    }
    return Array.from(uniquePairs).map(item=>JSON.parse(item)).sort()
};