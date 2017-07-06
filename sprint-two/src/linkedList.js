var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newTail = Node(value);
    
    if (list.tail !== null) {
      var previousTail = this.tail;
      previousTail.next = newTail;
    } else { // when the list is empty
      this.head = newTail;
    }
    this.tail = newTail;
     
  };

  list.removeHead = function() {

    // define previous head
    var previous = this.head;
    // and new head
    var next = this.head.next;
    //second node to refer to head; previously current now not pointed to head;
    this.head = next;
    //return our previous head;
    return previous.value;

  };

  list.contains = function(target) {
    //find the head; 
    var result = false;
    var nodeToExam = this.head;
    //while condition this value is not target, 
    while (nodeToExam) {
      // access next 
      //if accessed result = true;
      if (nodeToExam.value === target) {
        return true; 
      }
      nodeToExam = nodeToExam.next;
    }
    return result;
    
  };
   

  return list;
    
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
