var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.size()] = value;
};

Queue.prototype.dequeue = function () {
  var result = this.storage[0];
  for (var i = 0; i < this.size() - 1; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  delete this.storage[this.size() - 1 ];
  return result;
};

Queue.prototype.size = function() {
  var counter = 0;

  for (var i in this.storage) {
    counter++;
  }
  return counter;
};



