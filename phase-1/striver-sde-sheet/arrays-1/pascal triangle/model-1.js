
// {
//     tc - O(r)
//     sc - O(1)
// }
function find_by_location(n, r){
    let ans = 1
    for(let i=0; i<r; i++){
        ans = ans * ((n-i) / (i+1))
    }
    return ans
}

console.log(find_by_location(3, 1))

// {
//     tc - O(n * r)
//     sc - O(1)  -- array is ignored cause its just used to store the result and not for any calcuation purposes
// }
function find_by_row(row){
    let arr = []
    for (let i=0; i<row+1; i++){
        arr.push(find_by_location(row, i))
    }
    return arr
}

console.log(find_by_row(5))


// {
//     tc - O(n * n * r)
//     sc - O(1)
// }
function print_pyramid(rows){
    let arr = []
    for (let i=0; i<rows; i++){
        arr.push(find_by_row(i))
    }
    return arr
}

console.log(print_pyramid(5))