function Node(value) {
  this.value = value;
  this.next = undefined;
}

function SLinkedList() {
  var head = undefined;
  var length = 0;

  return {
    insert: function(item) {
      if (!item) return;

      var node = new Node(item);

      if (head) {
        node.next = head;
      }

      head = node;
      length++;
    },
    delete: function(value) {
      var curr = head;

      if (head.value === value) {
        head = head.next;
        return;
      }

      while (curr) {
        if (curr.next) {
          var next = curr.next;

          if (next.value === value) {
            curr.next = next.next;
            length--;
            break;
          }
        }

        curr = curr.next;
      }
    },
    search: function(value) {
      var curr = head;
      var found = undefined;

      while (curr) {
        if (curr.value === value) {
          found = curr;
          break;
        }

        curr = curr.next;
      }

      return found;
    },
    size: function() {
      return length;
    },
    print: function() {
      var result = [];

      var curr = head;
      while (curr) {
        result.push(curr.value);

        curr = curr.next;
      }

      return result;
    }
  }

}

var demoLinkedList = new SLinkedList();

function perform(type) {
  var status = document.getElementById('current-status');
  status.innerHTML = 'Status: Processing...';
  var input = document.getElementById('input-field');

  if (input) {
    var value = input.value;

    var result = demoLinkedList[type](value);
    input.value = "";

    if (type === 'search') {
      printSearch(result);
    }
  }

  printDetails();

  printStructure();

  status.innerHTML = 'Status: Completed.'
}

function printSearch(node) {
  var divDisplay = document.getElementById('search-result');

  var result = "Search result: Not existed.";

  if (node) {
    result = 'Search result: ' + node.value;

    if (node.next) {
      result += " with pointer to next list element: " + node.next.value;
    } else {
      result += ' is the tail of demo list.'
    }
  }

  divDisplay.innerHTML = result;
}

function printDetails() {
  var size = demoLinkedList.size();

  document.getElementById('current-size').innerHTML = 'Size of list: ' + size;
}

function printStructure() {
  var structrue = demoLinkedList.print();
  var display = document.getElementById('list-look');

  display.innerHTML = '';

  var DisplayLabel = document.createElement('div');
  DisplayLabel.setAttribute('class', 'list-label');
  DisplayLabel.innerHTML = 'Demo Linked List: '

  display.appendChild(DisplayLabel);

  for (var i = 0; i < structrue.length; i++) {
    var item = structrue[i];
    var div = document.createElement('div');

    div.setAttribute('class', 'list-item');
    div.innerHTML = item;

    display.appendChild(div);
  }
}
