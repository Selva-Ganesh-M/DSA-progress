/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// function rotateRight(head: ListNode | null, k: number): ListNode | null {
//     let curr = head
//     if (!curr){
//         return curr
//     }
//     let length: number = 1
//     while(curr.next){
//         length+=1
//         curr = curr.next
//     }
//     curr.next = head
//     let movesToMake: number = length - (k%length)
//     while(movesToMake){
//         curr = curr.next
//         movesToMake--
//     }
//     head = curr.next
//     curr.next = null
//     return head
// };