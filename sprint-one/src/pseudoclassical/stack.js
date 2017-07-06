var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};  
};

//Stack.prototype.storage = {};

Stack.prototype.push = function(value) {
  //console.log(this.prototype.storage);
  console.log(this.storage);
  this.storage[this.size()] = value;
};
Stack.prototype.pop = function() {
  var results = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return results;
};
Stack.prototype.size = function() {
  var counter = 0;
  for (var i in this.storage) {
    counter++;
  }
  return counter;
};



