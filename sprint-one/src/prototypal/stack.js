var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  
  var stack = Object.create(stackMethods);
  stack.storage = {};
  return stack;
};

var stackMethods = {
  push: function(value) {
    this.storage[this.size()] = value;
  },
  pop: function() {
    var results = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return results;
  },
  size: function() {
    var counter = 0;
    for (var i in this.storage) {
      counter++;
    }
    return counter;
  }
};


