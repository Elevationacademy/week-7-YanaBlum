/* Write your class below */

class Queue {
  constructor() {
    this.queue = []
    this.length = 0
  }

  enqueue(number) {
    this.queue.unshift(number)
    this.length++
  }

  print() {
    console.log(this.queue)
  }

  peek() {
    return this.queue[this.length - 1] || null
  }

  isEmpty() {
    return !!!this.queue.length
  }

  dequeue() {
    this.queue.pop()
    this.length--
  }
}



//You can paste the test code from the lesson below to test your solution

let q = new Queue()
console.log(q.isEmpty())    //true
q.print()                   //[]
q.enqueue(2)
console.log(q.isEmpty())    //false
q.enqueue(4)
q.print()                   //[4,2]
console.log(q.peek())       //2
q.dequeue()
q.dequeue()
console.log(q.peek())       //null
console.log(q.isEmpty())    //true


/* Do not remove the exports below */
module.exports = Queue