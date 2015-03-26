var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
  this.num = 0;
  this.order = 0;

};

Queue.prototype.size = function() {
  return this.num;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.num + this.order] = value;
  this.num++;
}

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.order];
  if (this.num > 0) {
    this.num--;
  }
  if (this.order < this.num) {
    this.order++;
  }
  return temp;
}
