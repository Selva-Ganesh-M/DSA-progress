
/**
 * 
 * @param nums 
 * @returns 
 * Solution type: Better
 * TC - O(m*n)
 * SC - O(m*n)
 */
function majorityElement(nums: number[]): number[] {
    let map = new Map<number, number>()

    let num1 = -1
    let num2 = -1

    let count1 = 0 
    let count2 = 0

    for (let i =0; i<nums.length; i++){
        if (count1==0 && num2 != nums[i]){
            num1 = nums[i]
            count1+=1
        }
        else if (count2 ==0 && num1!=nums[i]){
            num2 = nums[i]
            count2+=1
        }
        else if (num1==nums[i]){
            count1+=1
        }
        else if (num2 == nums[i]){
            count2+=1
        }else{
            count1-=1
            count2-=1
        }
    }
    count1 = 0
    count2 = 0
    const min_allowed_count = Math.floor(nums.length/3)+1
    for (let num of nums){
        if (num==num1){
            count1+=1
        }else if (num==num2){
            count2+=1
        }
    }
    const ans: Array<number> =  []
    if (count1>=min_allowed_count) ans.push(num1)
    if (count2>=min_allowed_count) ans.push(num2)
    return ans

};