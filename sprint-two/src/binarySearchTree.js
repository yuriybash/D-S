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

    console.log("inserted " + node)


    function insertNode(newNode, currentComparisonNode){

      if(currentComparisonNode["left"] === null && currentComparisonNode["right"] === null){

          var createNode = {};
          createNode.value = newNode;
          createNode.left = null;
          createNode.right = null;

          if(newNode < currentComparisonNode.value){
              currentComparisonNode.left = createNode;
          } else{
            currentComparisonNode.right = createNode;
          }

          return;

      }
       else if(newNode < currentComparisonNode.value){

              if(currentComparisonNode.left !== null){
                insertNode(newNode, currentComparisonNode.left)
              } else{
                currentComparisonNode.left = newNode;
              }

       }
       else if(newNode > currentComparisonNode.value){

          if(currentComparisonNode.right !== null){
                insertNode(newNode, currentComparisonNode.right)
              } else{
                currentComparisonNode.right = newNode;
              }


       }








    }


    insertNode(node, obj);


    console.log("BST is now: ")
    console.log(obj);
    console.log(" ")







    // //if the tree has only one node, add the new node to the left or right
    // if(obj["left"] === null && obj["right"] ===null){

    //     var newNode = {};
    //     newNode.value = node;
    //     newNode.left = null;
    //     newNode.right = null;

    //     if(node < obj.value){
    //       obj.left = newNode;
    //     } else{
    //       obj.right = newNode;
    //     }

    // }

    //if the the tree has at least one child - whether to the left or to the right,
    //we want to

    console.log(obj);
    return;



  }




  obj.contains = function(target){

  }




  obj.depthFirstLog = function(){

  }



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
