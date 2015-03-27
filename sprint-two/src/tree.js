var Tree = function(value){
  var newTree = {};
  newTree.value = value;

  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = [];  // fix me

  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(new Tree(value));
};

treeMethods.contains = function(target){

  var bool = false;

 // debugger;
  if (this.value === target) {
    bool = true;
  };

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if(this.children[i].contains(target)){bool = true};
    }
  }



console.log("target: " + target + "bool: " + bool);
if (bool === true) return bool;

};


/*

tree.addChild(5);
tree.addChild(6);
tree.children[0].addChild(7);
tree.children[1].addChild(8);
expect(tree.contains(7)).to.equal(true);
expect(tree.contains(8)).to.equal(true);



 * Complexity: What is the time complexity of the above functions?
 */

//[{value: value}, {children: [{value: value}] }, {2: 2}, {3:3}]
