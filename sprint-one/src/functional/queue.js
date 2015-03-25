var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {},
      size = 0,
      queue = 0,
      value;

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function(){
    value = storage[queue];
    if (size > 0) {
      size --;
    }
    if (queue < size) queue++;
    else queue = size;
    return value;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
