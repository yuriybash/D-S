

var Graph = function(){

  this.storage = {};


};

Graph.prototype.addNode = function(node){
    newNode = {};
    newNode[node] = node;
    this.storage[node] = newNode;



};

Graph.prototype.contains = function(node){

  return this.storage.hasOwnProperty(node);


};

Graph.prototype.removeNode = function(node){

  if(this.contains(node)){
      delete this.storage[node];
  }

};

Graph.prototype.hasEdge = function(fromNode, toNode){


    if(this.storage[fromNode][toNode]){

      return true;
    }
    return false;


};

Graph.prototype.addEdge = function(fromNode, toNode){

    this.storage[fromNode][toNode] = toNode;
    this.storage[toNode][fromNode] = fromNode;



};

Graph.prototype.removeEdge = function(fromNode, toNode){

  delete this.storage[fromNode][toNode];
  delete this.storage[toNode][fromNode];



};

Graph.prototype.forEachNode = function(cb){



  for(var prop in this.storage){

    cb(prop);
  }


};

/*
 * Complexity: What is the time complexity of the above functions?
 */




