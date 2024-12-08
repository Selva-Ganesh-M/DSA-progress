function twoSum(nums: number[], target: number): number[] {
    const map = new Map<number, number>();
    for (let i=0; i<nums.length; i++){
        const lookup = target - nums[i]
        if (map.has(lookup)){
            return [map.get(lookup), i]
        }
        map.set(nums[i], i)
    }
    return [-1, -1]
};