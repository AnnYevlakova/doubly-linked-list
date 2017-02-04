const Node = require('./node');

function getNext(node) {
	return node.next;
}
function getPrevious(node) {
	return node.prev;
}

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }
    
    append(data) {
        var node = new Node(data);
		this.length = this.length++;
		if(this.length == 1) {
			this._head = node;
			this._tail = node;
		} else {
			var last = this._head;
			for(var i = 1; i < this.length-1; i++ ) {
				last = getNext(last);
			}
			last.next = node;
			node.prev = last;
			this._tail = node;
		}
		return this;
    }

   head() {
	   if(this.length == 0) {
		   return null;
	   }
	   return this._head.data;
   }

   tail() {
	   if(this.length == 0) {
		   return null;
	   }
	   return this._tail.data;
   }

   at(index) {
	   if(index > this.length || index < 0) {
		   return -1;
	   }
	   var node = this._head;
	   if(index == 0) {
		   return node.data;
	   }
       for(var i = 1; i <= index; i++) {
		   node = getNext(node);
	   }
	   return node.data;
   }
	
   insertAt(index, data) {
	   if(this.length == 0) {
		   this._head = node;
		   this._tail = node;
		   return this;
		}
	   if(index > this.length+1 || index < 0) {
			return -1;
		}
	   var node = new Node(data);
	   var last = this._head;
	   if(index == 0) {
		   last.prev = node;
		   node.next = last;
		   this._head = node;
	   }
	   if(index == 1){
	   		last.next = node;
	   		node.prev = last;
	   		this._tail = node;
	   }
		for(var i = 1; i <= index-1; i++) {
			last = getNext(last);
			if(last.next == null) {
	   			last.next = node;
	   			node.prev = last;
	  			this._tail = node;
	   		} else {
		  		last.next.prev = node;
		   		node.next = last.next;
		  		node.previous = last;
		   		last.next = node;
	  		}
	  		this.length = this.length++;
        }
	  	return this;
   }

    isEmpty() {
		if(this.length != 0) {
			return false;
		} else {
			return true;
		}
	}

   clear() {
	    this.length = 0;
        this._head = null;
        this._tail = null;
	    return this;
	}

    deleteAt(index) {
		if(index > this.length || index < 0) {
			return -1;
		}
		var last = this._head;
		if(index == 0) {
			if (last.next == null) {
				this._head = null;
				this._tail = null;
				return this;
			}
			last.next.prev = null;
			this._head = last.next;
		}
		for(var i = 1; i < index; i++) {
			last = getNext(last);
			if(last.next == null) {
		    	last.prev.next = null;
		   		this._tail = last.previous;		   
	   		} else {
		   		last.prev.next = last.next;
		   		last.next = last.previous;
	   		}
	  		this.length = this.length -1;
		}
		return this;
	}

    reverse() {
		var last = this._head;
		if(this.length == 1) {
			return this;
		}
		last.prev = last.next;
		last.next = null;
		this._tail = last;
		for(var i = 1; i <= this.length-1; i++) {
			last = getPrevious(last);
			if(i == this.length-1){
		    	last.next = last.prev;
		   	 	last.prev = null;
				this._head = last;
	   		} else {
		   		var a = last.next;
			   last.next = last.prev;
			   last.prev = a;
		   }
		}
		return this;
	}

    indexOf(data) {
		var last = this._head;
		if(last.data == data) {
			return 0;
		}
		for(var i = 1; i < this.length; i++ ) {
			last = getNext(last);
			if(last.data == data) {
				return i;
			}
		}
		return -1;
	}
}

module.exports = LinkedList;

            
