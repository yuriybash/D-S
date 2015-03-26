var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.num = 0;
  this.storage = {};
};

Stack.prototype.size = function() {
  return this.num;
}

Stack.prototype.push = function(value) {
  this.storage[this.num] = value;
  this.num++;
};

Stack.prototype.pop = function() {
  var temp = this.storage[this.num - 1];
  if (this.num > 0) {
    this.num--;
  };
  return temp;
}
