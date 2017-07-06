
var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.storage = {};
  stack = _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push: function(value) {

    this.storage[this.size()] = value;
  },
  pop: function() {
    var result = this.storage[this.size() - 1];
    delete this.storage[this.size() - 1];
    return result;
  }, 
  size: function() {
    var count = 0;
    for (var i in this.storage) {
      count++;
    }
    return count;
  }
};

