var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);

  var newBucketObject = {};
  newBucketObject[k] = v;

  if(!this._storage.hasOwnProperty(i)){
      this._storage[i] = newBucketObject;
  } else{
    this._storage[i][k] = v;
  }

};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  return this._storage[i][k]
};

HashTable.prototype.remove = function(k){

  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage[i][k] = null;

};



/*
 * Complexity: What is the time complexity of the above functions?
//  */
