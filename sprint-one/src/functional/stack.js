var Stack = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {},
      size = 0,
      value;

  // Implement the methods below
  someInstance.push = function(value){
    storage[size] = value;
    size++;
  };

  someInstance.pop = function() {

    value = storage[size - 1];
    if (size > 0) {
      size--;
    };
    return value;
  };

  someInstance.size = function(){
    return size;
  };

  return someInstance;
};
