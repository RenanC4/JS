//Queue no JS eh FIFO first in first out insere um novo elemento no iniciio, o ultimo sai

function Queue() {
    this.data=[];
}

Queue.prototype.add = funciton(record){
    this.data.unshift(record);
}

Queue.prototype.remove = funciton(){
    this.data.pop();
}

Queue.prototype.first = function(){
    return this.data[0];
}

Queue.prototype.last = function(){
    return this.data[this.data.length -1];
}

Queue.prototype.size = function(){
    return this.data.length;
}

const q = new Queue();
q.add(1);
q.add(2);
q.add(3);

console.log(q); // [3,2,1]

console.log(q.first()); // 3
console.log(q.last()); // 1

//using the remove method to remove the oldest value

q.remove();
console.log(q); // [3,2]

console.log(q.size()); // 2
