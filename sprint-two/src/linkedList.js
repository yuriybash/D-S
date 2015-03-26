var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var item = new Node(value);

    if (this.tail === null) {
      this.tail = item;
    }

    if (this.head === null) {
      this.head = item;
    }

    this.tail.next = item;
    this.tail = item;

  };

  list.removeHead = function(){
    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target){
    var node = this.head;
    while (node) {
      if (node.value === target) {
        return true;
      }
      node = node.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
