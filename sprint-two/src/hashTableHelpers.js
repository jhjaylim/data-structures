/*
 ********** NOTE: **********
 * Do not edit this code unless you see a bug!
 */


// This class represents an array with limited functionality and a maximum size.
// It will ensure that you don't accidentally try to use up too much space.
//
// Usage:
//   limitedArray.set(3, 'hi');
//   limitedArray.get(3); // returns 'hi'

var LimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index, key) {// O(1) - statistically constant
    checkLimit(index);
    // find index of out storage : bucket
    var bucket = storage[index];
    // loop through each item in array
    var result;
    if (!bucket) {
      return undefined;
    } else {
      for (var i = 0; i < bucket.length; i++) {
        if (bucket[i][0] === key ) {
          result = bucket[i][1];  
      
        }
      }
    }
    
    
    // if first item is a key, then return second item

    return result;// value in tuple;
  };

  limitedArray.set = function(index, value, key) { //O(1) statistically constant
    checkLimit(index);
    var bucket = storage[index];
    if (value === undefined) { // removing case
      if (bucket.length === 1) {
        storage[index] = undefined;
      } else {
        var indexOfTupleToRemove;
        for (var i = 0; i < bucket.length; i++) {
          if (bucket[i][0] === key) {
            indexOfTupleToRemove = i;
          }
        }
        bucket[i] = undefined;
      }
    } else { // inserting case
      if (!storage[index]) {
        storage[index] = [];
      } 
      storage[index].push([key, value]);
    } 
          
    
  };

  limitedArray.each = function(callback) { // O(n) - linear
    for (var i = 0; i < storage.length; i++) {
      callback(storage[i], i, storage);
    }
  };

  var checkLimit = function(index) { // O(1) constant  
    if (typeof index !== 'number') {
      throw new Error('setter requires a numeric index for its first argument');
    }
    if (limit <= index) {
      throw new Error('Error trying to access an over-the-limit index');
    }
  };

  return limitedArray;

};


// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between the
// numbers 0 and `max`
var getIndexBelowMaxForKey = function(str, max) { // O(1) - constant
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  
  return hash % max;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
