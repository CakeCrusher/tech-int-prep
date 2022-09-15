const test = () => {
  // get the last node
  let all = []
  let allI = head
  while (allI) {
    all.push(allI)
    allI = allI.next
  }
  let curr = head
  let i = 0

  let nn = curr.next.next

  while (curr) {
    let nxt = curr.next
    let nn = curr.next.next
    if (i % 2 === 1) {


    } else {
      const nBack = i/2
      curr.next.next = curr.next.next.next
      curr.next = all[all.length - 1 - nBack]
      curr.next.next = nxt
    }
    i ++
    curr = all[i]
    
  }

}

const test = () => {
  let slow = head
  let fast = head.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  let second = slow.next
  prev = slow.next = null
  while (second) {
    let tmp = second.next
    second.next = prev
    prev = second
    second = tmp
  }

  let first = head
  second = prev
  while (second) {
    let tmpFirst = first.next
    let tmpSecond = second.next
    first.next = second
    second.next = tmpFirst
    first = tmpFirst
    second = tmpSecond
  }
}

console.log(test())