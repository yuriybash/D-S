var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var obj = Object.create(queueMethods);
  obj.num = 0;
  obj.storage = {};
  obj.order = 0;




  return obj;
};

var queueMethods = {};

queueMethods.enqueue = function(value){

  this.storage[this.num + this.order] = value;
  console.log(this.storage)
  this.num++;


};

queueMethods.dequeue = function(){

    var temp = this.storage[this.order];
    if(this.order < this.num){
      this.order++
    };

    if(this.num > 0){
      this.num--;
    }

    return temp;

}

queueMethods.size = function(){

    return this.num;


}
