var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {  
    storage[someInstance.size()] = value;
  };
  
  someInstance.pop = function() {
    var result = storage[someInstance.size() - 1];
    delete storage[someInstance.size() - 1];
    return result;
  };

  someInstance.size = function() {
    var count = 0;
    for (var i in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};

//var myStack = Stack(); // someInstance.push .... myStack.push;
