var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // give newTree access to treeMethod
  _.extend(newTree, treeMethods);
 
  newTree.children = [];  // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {

  // access tree and children and push new tree to children
  this.children.push(Tree(value));
  
};

treeMethods.contains = function(target) {

  // access tree itself and for each child find a value if that is equivalent
  // recurse for children
  // base case:
  var result = false; 
  if (this.value === target) {
    result = true;
  } 
  // recursive case:
  
  _.each(this.children, function(child) {
    
    if (child.contains(target)) {
      result = true; 
    }
    //true;
    // somehow checks the child value and set result if necessary
    // somewhere set result to true when child returns true;
  });
  
  return result;

};

// somefunction();
// this.contains(child)  



/*
 * Complexity: What is the time complexity of the above functions?
 */
