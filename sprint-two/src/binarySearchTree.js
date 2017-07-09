var BinarySearchTree = function(value) {
// properties left, right, insert, contains, depthFirstLog

// objects: left, right

// methods: insert, contains, depthFirstLog

  var tree = Object.create(BinarySearchTree.prototype);
  tree.value = value;
  tree.left = null;
  tree.right = null;
  return tree; 
};

BinarySearchTree.prototype.insert = function(value) { // O(log n)

  var comparison = this.value < value ? 1 : -1; // compare this.value and value and see if we need to left or right
    
  if (comparison > 0 ) { // right
    if (this.right === null) { // base case
      this.right = BinarySearchTree(value); // set right of this to new branch 
    } else { //otherwise recurse
      this.right.insert(value); // call this function on (value, this object.left)
    }
  }  

  if (comparison < 0) { // left 
    if (this.left === null) { 
      this.left = BinarySearchTree(value); 
    } else { 
      this.left.insert(value); 
    }   
  }

};

BinarySearchTree.prototype.contains = function(value) { // O(log n)
  if (this.value === value ) {
    return true;
  } 
  
  var comparison = value > this.value ? 1 : -1; // comparison: if current branch value is less than passed in value;
  if (comparison > 0) {
    if (!this.right) {  // if that to right does not exist;
      return false;
    } else {  
      return this.right.contains(value); // recurse through to the right 
    }
  } else if (comparison < 0) {
    if (!this.left) {
      return false;
    } else {
      return this.left.contains(value); // recurse through to the left
    }
  }
  return false;
};

BinarySearchTree.prototype.depthFirstLog = function(callback) { // O(n)
  
  callback(this.value); //run the callback on current value;
  //recurse cases..
  if (this.left) { //if that left exists 
    this.left.depthFirstLog(callback); //recursively run the callback on the current left branch;
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
