function majorityElement(nums: number[]): number {
    if (nums.length<=0){return -1}
    let curr: number = -1;
    let count = 0
    let i = 0
    while (i<nums.length){
        if (count==0){
            curr = nums[i]
            count = 1
            i+=1
            continue
        }
        if (curr!=nums[i]){
            count -= 1
        }else{
            count += 1
        }
        i+=1
    }

    let countOfItem = 0
    for (const num of nums){
        if (num==curr){
            countOfItem+=1
        }
    }

    if (countOfItem > Math.floor(nums.length/2)){
        return curr
    }

    return -1

};