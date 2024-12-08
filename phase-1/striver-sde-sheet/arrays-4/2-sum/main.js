const arr = [1,2,3,4,5]
const target = 7

// On2
// for (let i=0; i<arr.length; i++){
//     for (let j=i+1; j<arr.length; j++){
//         if (arr[i]+arr[j]==target){
//             console.log(i, j)
//             return
//         }
//     }
// }

// O(n+nlogn)
// const hash = new Map();
// for (const x of arr){
//     expected = target - x
//     if (hash.has(expected)){
//         const loc = hash.get(expected)
//         console.log(loc, arr.indexOf(x))
//         return
//     }
//     hash.set(x, arr.indexOf(x))
// }

// O(n+nlogn)
// arr.sort()
// let i=0
// let j=arr.length-1
// while(i<j){
//     const sum = arr[i]+arr[j]
//     if (sum<target){
//         i+=1
//     }else if (sum>target){
//         j-=1
//     }else{
//         console.log(i, j)
//         return
//     }
// }
// console.log(-1)