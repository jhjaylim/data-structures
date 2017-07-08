

var HashTable = function() {
  this._limit = 8;
  this._storageContainer = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) { // O(1) - constant
  //input: key, value; output: none;
  //constraints: simplified version; no tuples
  //edge: same key, hashTable size: don't have to worry about these.
  //take the key and translate it to variable: index;
  var index = getIndexBelowMaxForKey(k, this._limit);

  //set the value to index location;
  this._storageContainer.set(index, v, k);
  
  
};

HashTable.prototype.retrieve = function(k) { // O(1) - constant
  var index = getIndexBelowMaxForKey(k, this._limit);
  //input: key; output: value at index position within storage
  //access index position in storage;
  //return what we find;
  return this._storageContainer.get(index, k);
};

HashTable.prototype.remove = function(k) { // O(1) - constant
  var index = getIndexBelowMaxForKey(k, this._limit);
  //input key; output none;
  //edge case: we don't want to mututate indexing;
  //empty the index position;
  
  // if we find that there is only one item in bucket, then set bucket to undefined
    
  this._storageContainer.set(index, undefined, k);  

  // else iterate through buckey array, and remove tuple by splicing;



};



/*
 * Complexity: What is the time complexity of the above functions?
 */


