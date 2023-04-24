
class BinaryHeap {
  list: number[]

  constructor() {
    this.list = [];
  }

  maxHeapify = (arr: number[], n: number, i: number) => {
    let max = i;
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < n && arr[left] > arr[max]) max = left;
    if (right < n && arr[right] > arr[max]) max = right;

    if (max != i) {
      [arr[i], arr[max]] = [arr[max], arr[i]];
      this.maxHeapify(arr, n, max);
    }
  }

  insert = (num: number) => {
    const copy = this.list
    if (copy.length === 0) copy.push(num);
    else {
      copy.push(num);
      const len = Math.floor(copy.length / 2 - 1);
      for (let i = len; i >= 0; i--) {
        this.maxHeapify(copy, copy.length, i);
      }
    }
  }

  delete = (num: number) => {
    const copy = this.list;
    const last = copy.length - 1;
    let i: number;
    for (i = 0; i <= last; i++) {
      if (num === copy[i]) break;
    }

    [copy[i], copy[last]] = [copy[last], copy[i]];

    copy.pop();
    const len = Math.floor(last / 2 - 1)
    for (let i = len; i >= 0; i--) {
      this.maxHeapify(copy, last, i);
    }
  }

  findMax = () => this.list[0];
  deleteMax = () => this.delete(this.list[0]);

  extractMax = () => {
    const max = this.list[0];
    this.delete(max);
    return max;
  }

  size = () => this.list.length;
  isEmpty = () => this.list.length === 0;
  getList = () => this.list;
}