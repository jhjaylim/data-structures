var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = [];
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) { // O(n) - linear
  if (!this.contains(item)) {
    this._storage.push(item);
  } 
};

setPrototype.contains = function(item) { // O(n) - linear
  var result = false;
  this._storage.forEach(function(val) {
    if (val === item) {
      result = true;
    }
  });
  return result;
};

setPrototype.remove = function(item) { // O(n) - linear
  var index;
  this._storage.forEach(function(it, i) {
    if (item === it) {
      index = i;
    }
  });
  this._storage.splice(index, 1);

};

/*
 * Complexity: What is the time complexity of the above functions?
 */
