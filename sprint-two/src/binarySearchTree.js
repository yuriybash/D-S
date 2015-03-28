var BinarySearchTree = function(value){


  var obj = {};
  obj.value = value;
  obj.left = null;
  obj.right = null;
  //console.log("created tree: " + obj);




  obj.insert = function(node){

    //console.log("inserted node: " + node)
    //base case: current node you're comparing with has no children
        //if node to be inserted is less than comparison node, insert to left
        //else insert to right




    function insertNode(newNode, currentComparisonNode){

      var createNode = BinarySearchTree(node);


      if(currentComparisonNode["left"] === null && currentComparisonNode["right"] === null){



          if(newNode < currentComparisonNode.value){
              currentComparisonNode.left = createNode;
          } else{
            currentComparisonNode.right = createNode;
          }



      }
       else if(newNode < currentComparisonNode.value){

              if(currentComparisonNode.left !== null){
                insertNode(newNode, currentComparisonNode.left)
              } else{
                currentComparisonNode.left = createNode;
              }

       }
       else if(newNode > currentComparisonNode.value){

          if(currentComparisonNode.right !== null){
                insertNode(newNode, currentComparisonNode.right)
              } else{
                currentComparisonNode.right = createNode;
              }


       }








    }


    insertNode(node, obj);

    return;



  }




  obj.contains = function(target){

    //1. check head node. if match, return true
    //2. if target < head node, check against all nodes in left branch of head node
    //3. if target > head node, check against all nodes in right branch of head node
    //if no match found at end, return false;

    var bool = false;

    if(this.value === target || bool){
      bool = true;
    }
    else if(target < this.value && this.left){
        bool = this.left.contains(target);
    } else if(this.right) {
        bool = this.right.contains(target);
    }


    return bool;



  }




  obj.depthFirstLog = function(cb){

    cb(this.value);

    if(this.left){
        this.left.depthFirstLog(cb);
    }
    if(this.right){
        this.right.depthFirstLog(cb);
    }
  };

  obj.breadthFirstLog = function(cb){

    var nodeArray = [];

    nodeArray.push(this);
    nodeArray.push(this.left);
    nodeArray.push(this.right);




    nodeArray = nodeArray.concat();



    /*
    // debugger;
    var array = [];
    var nodesToVisit = [this];
    var currentNode = this;


    while(nodesToVisit){

        array.push(currentNode);
        nodesToVisit.push(currentNode.left);
        nodesToVisit.push(currentNode.right);





    }




// execute cb on root
    array.push(this);
// execute cb on left
  if (this.left) {
    array.push(this.left);
    nodesToVisit.push(this.left);
  };

  if (this.right) {
      array.push(this.right);
      nodesToVisit.push(this.right)
  }




// go down right and repeat
    //this.right.breadthFirstLog(cb)



debugger;

  };

*/
};






  return obj;
};





/*
 * Complexity: What is the time complexity of the above functions?
 */

//
//     {value: value,
//       left: {
//                     value: value,
//                     left: null,
//                     right: null

//                   },
//       right: {
//                   value: value,
//                   left: null,
//                   right: null

//       }



//
