var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[someInstance.size().toString()]=value;
  };

  someInstance.dequeue = function() {
    var result = storage['0'];
    if (someInstance.size()!==0) {
      for (var i = 0; i<someInstance.size(); i++) {
        if (i===someInstance.size()-1) {
          delete storage[i.toString()];
        } else {
          storage[i.toString()]= storage[(i+1).toString()];
        }
      }
    }
    return result;
    
  };

  someInstance.size = function() {
    var counter = 0;
    for (var x in storage) {
      counter++;
    }
    return counter;
  };

  return someInstance;
};
