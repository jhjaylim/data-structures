var BinarySearchTree = function(value) {
// properties left, right, insert, contains, depthFirstLog

// objects: left, right

// methods: insert, contains, depthFirstLog

  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;


  return tree; //
};

BinarySearchTree.prototype.insert = function(value) {
  var BSTree = BinarySearchTree(value);
  // inputs: values;
  // outputs: we dont have output

  // contrains: binary tree form. 
  // edge: do not overwrite value
  

  // comapre this.value and value and see if we need to left or right
  var comparison = this.value < value ? 1 : -1;   
  // base case

  if (comparison > 0 ) { // right
    // base case
    if (this.left === null) {
      this.left = BSTree;
    } else {
      this.left.insert(value);
    }

    // recurse case


  } 
  
  
  
  // compare the value with this.value; 
  if (comparison < 0) {//left
    //base

    // recurse    

  }
  
      //then when this.left or right.value = undefined
      // set to left of right depending on comaprison of values   

  // recursion case
    // somehow we know that new tree goes right
    // if statement with to do when left;
      // this.left = BSTree;
    // somehow we know that new tree goes to left
};

BinarySearchTree.prototype.contains = function() {


};

BinarySearchTree.prototype.depthFirstLog = function() {


};







/*
 * Complexity: What is the time complexity of the above functions?
 */
