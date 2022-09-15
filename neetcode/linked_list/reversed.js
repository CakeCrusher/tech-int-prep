// const head = [1,2,3,4,5]
// const test = () => {
//   let i = 0
//   const res = [] 
//   while (i < head.length) {
//     res.push(head[head.length - 1 - i])
//     i++
//   }
//   return res
// }
// console.log(test())

// const head = [1,2,3,4,5]
// const test = () => {
//   let prev = null
//   let curr = head
//   while (curr) {
//     let nxt = curr.next
//     console.log(prev,curr,nxt)
//     // [1,2,3,4,5] => [2,3,4,5]
//     curr.next = prev
//     // [2,3,4,5] => null
//     console.log(curr.next)
//     prev = curr
//     // null => [1,2,3,4,5]
//     curr = nxt
//     // [1,2,3,4,5] => [2,3,4,5]
//   }
//   return prev
// }

const head = [1,2,3,4,5]
const test = () => {
  if (!head) {
    return null
  }
  newHead = head
  if (head.next) {
    newHead = test(head.next)
    head.next.next = head
  }
  return newHead
}

console.log(test())