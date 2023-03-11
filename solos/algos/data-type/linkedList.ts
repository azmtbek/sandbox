
export class LinkedList {
  next: LinkedList | null = null
  data: number

  constructor(d: number) {
    this.data = d
  }
}

export function deleteNode(head: LinkedList, d: number) {
  let n = head
  if (n.data == d) return head.next
  while (n.next) {
    if (n.next.data == d) {
      n.next = n.next.next
      return head
    }
    n = n.next
  }
  return head
}

