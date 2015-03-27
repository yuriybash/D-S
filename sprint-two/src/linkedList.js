var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){

    var newNode = Node(value);
    if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;


  };

  list.removeHead = function(){

      var removedHead = this.head.value;

      this.head = this.head.next;


      return removedHead;


  };

  list.contains = function(target){

    var startNode = this.head;

    while(startNode){

        if(startNode.value === target){
          return true;
        }

        startNode = startNode.next;

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

// {
//   head: {value: value, next: next node},
//   node1,
//   node2,
//   node3,
//   tail: {value: value, next: null},

// }
