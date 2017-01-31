const Node = require('./node');


class LinkedList {
    constructor() {
        this._nodes = [
            {data: 'lower limiter',
            previous: null,
            next: ''},
            {data: 'upper limiter',
            previous: '',
            next: null}
        ];
        this._length = 0;
        this._head = null;
        this._tail = null;
    }
    
    append(data) {
        var node = {
			index: null,
            data: data,
            previous: null,
            next: null
        };
		
		this._nodes.splice(this._length+1, 0,node);
		this._length = this._nodes.length - 2;
		node.index = this._length+1;
		node.previous = this._nodes[this._length-1];
		node.next = this._nodes[this._length+1];
		this._nodes[this._length-1].next = node;
		this._nodes[this._length+1].previous= node;
		
		if (this.length != 0) {
			this._head = this._nodes[1];
		}
		if (this._length != 0) {
			this._tail = this._nodes[this._nodes.length-2];
		}
        return alert("node with data '" + data + "' insert at node with index " + this._length);
    }

   get head() {
	   
	   return alert("index:" + eval(this._head.index -1) + ", data: " + this._head.data);
   }

   get tail() {
	   return alert("index:" + eval(this._tail.index -1) + ", data: " + this._tail.data);
   }

   at(index) {
	   if(index > this._length) {
		   return alert("there is no node with index " + index);
	   }
	   for(var i = 0; i <= this._nodes.length-2; i++) {
		   if (this._nodes[i].index == index) {
			   return alert("for index(" + index + ") data is " + this._nodes[index].data);
		   }
	   }
	   }
   

   insertAt(index, data) {
	    var node = {
			index: index+1,
            data: data,
            previous: null,
            next: null
        };
		
		this._nodes.splice(index, 0,node);
		this._length = this._nodes.length - 2;
		node.previous = this._nodes[this._length-1];
		node.next = this._nodes[this._length+1];
		this._nodes[this._length-1].next = node;
		this._nodes[this._length+1].previous= node;
		
		if (this.length != 0) {
			this._head = this._nodes[1];
		}
		if (this._length != 0) {
			this._tail = this._nodes[this._nodes.length-2];
		}
        return alert("node with data '" + data + "' insert at node with index " + index);
   }

    get isEmpty() {
		if(this._length != 0) {
			return alert('not empty');
		} else {return alert('empty');}
	}

   get clear() {
	   if(this._length == 0) {
		   return alert('LinkedList is already empty');
	   }
		this._nodes.splice(1, this._length);
	   this._nodes = [
            {data: 'lower limiter',
            previous: null,
            next: ''},
            {data: 'upper limiter',
            previous: '',
            next: null}
        ];
        this._length = 0;
        this._head = null;
        this._tail = null;
	}

    deleteAt(index) {
		if(index >  this._length) {
			return alert("there is no node with index " + index);
		}
		this._nodes[index-1].next = this._nodes[index+1];
		this._nodes[index+1].previous = this._nodes[index-1];
		this._nodes.splice(index, 1);
		this._length = this._nodes.length - 2;
		if (this.length != 0) {
			this._head = this._nodes[1];
		}
		if (this._length != 0) {
			this._tail = this._nodes[this._nodes.length-2];
		}		
		
	   
	}

    get  reverse() {
		if(this._length <2) {
			return alert('there are no nodes for reversing');
		}
		var nodes = this._nodes.slice(1, this._length+1).reverse();
		this._nodes.splice(1, this._length, nodes[0], nodes[1], nodes[2]);
		this._nodes[0].next = this._nodes[1];
		this._nodes[this._nodes.length-1].previous = this._nodes[this._nodes.length-2];
		for(var i = 1; i <= this._nodes.length - 2; i++) {
			this._nodes[i].index = i;
			this._nodes[i].previous = this._nodes[i-1];
			this._nodes[i]. next = this._nodes[i+1]
		}
		this._head = this._nodes[1];
		this._tail = this._nodes[this._length];
	}

    indexOf(data) {
		for(var i = 0; i <= this._nodes.length-2; i++) {
		   if (this._nodes[i].data == data) {
			   return alert("for data(" + data + ") index is " + i);
		   }
	   }
			return alert('there is no this data');
	}
}

module.exports = LinkedList;

/*const two = new LinkedList();

two.clear;
two.append("one");
two.append('two');
two.head;
two.tail;
two.at(2);
two.insertAt(3, 'three');
two.deleteAt(5);
two.reverse;*/