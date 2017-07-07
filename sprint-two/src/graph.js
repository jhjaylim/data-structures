

// Instantiate a new graph
var Graph = function() {
  this.nodes = [];
  this.edges = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {  //O(C) - constant
  this.nodes.push(node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {  //O(n) - linear
  var result = false;
  this.nodes.forEach(function(noder) {
    if (node === noder) {
      result = true;
    }
  });
  return result;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {  //O(n) - linear
  //iterate through this.nodes
  var indexToRemove;
  this.nodes.forEach(function(noder, i) {
    if (node === noder) {
      indexToRemove = i;
    }
  });
  this.nodes.splice(indexToRemove, 1);
  this.removeEdge(node);
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {  //O(n) - linear
  var result = false;
  this.edges.forEach(function(edge) {
    if ((edge[0] === fromNode && edge[1] === toNode) || (edge[1] === fromNode && edge[0] === toNode)) {
      result = true;
    }
  });
  return result;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {  //O(n) - linear
  if (!this.hasEdge(fromNode, toNode)) {
    this.edges.push([fromNode, toNode]);
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {  //O(n) - linear
  var indexToRemove;
  this.edges.forEach(function(edge, i) {
    if ((edge[0] === fromNode && edge[1] === toNode) || (edge[1] === fromNode && edge[0] === toNode)) {
      indexToRemove = i;
    }
  });
  this.edges.splice(indexToRemove, 1);
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {  //O(n) - linear
  this.nodes.forEach(cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


