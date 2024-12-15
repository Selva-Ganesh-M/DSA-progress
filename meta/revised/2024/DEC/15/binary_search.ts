function binarySearch(arr: Array<number>, target: number): number{
    let start: number =0
    let end: number = arr.length-1;
    while (start<=end){
        let mid = Math.floor((start+end)/2)
        if (arr[mid]==target){
            return mid
        }else if(target<arr[mid]){
            end = mid-1
        }else{
            start++
        }
    }
    return -1
}

const arr: Array<number> = [1,2,3,4,5,7]
const targetIndex: number = binarySearch(arr, 6)
console.log(targetIndex)

