var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size()] = value;
  };

  someInstance.dequeue = function() {
    var result = storage[0]; 
    console.log(storage[0]);
    for (var i = 0; i < someInstance.size(); i++) {
      if (i !== someInstance.size() - 1) {
        storage[i] = storage[i + 1];
        console.log(storage[i], '*', storage[i + 1]);
      } 
      delete storage[someInstance.size() - 1];
    }
    //delete storage[someInstance.size() - 1];
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
