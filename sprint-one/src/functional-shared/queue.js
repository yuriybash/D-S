var Queue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = {};
  obj.storage = {};
  obj.num = 0;
  obj.queue = 0;

  obj.size = queueMethods.size;
  obj.enqueue = queueMethods.enqueue;
  obj.dequeue = queueMethods.dequeue;






  return obj;

};

var queueMethods = {};

queueMethods.enqueue = function(value){

  this.storage[this.num + this.queue] = value;
  this.num++;
}

queueMethods.dequeue = function(){
  // debugger;
  var temp = this.storage[this.queue];
  if (this.num > 0) {
    this.num--;
  }

  if (this.queue < this.size) {
    this.queue++;
  }

  else {
    this.queue = this.size;
  };

  delete this.storage[this.queue];
  return temp;

}


queueMethods.size = function(){

  return this.num;
}

