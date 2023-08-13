function Node(value){
    this.value = value
    this.next = null
}

function LinkedList(node) {
    this.head = node
    this.addtoBack = function(node){
            let currentNode = this.head
            while (currentNode.next !== null) 
            {
                currentNode = currentNode.next
            }
            currentNode.next = node
    }
    this.printLinkedList = function()
    {
        currentNode = this.head
        while (currentNode !== null)
        {
            print(currentNode.value)
            currentNode = currentNode.next
        }
    }
}


node1 = new Node(1)
node2 = new Node(2)
node3 = new Node(3)
node4 = new Node(4)

LL = new LinkedList(node1)
LL.addtoBack(node2)
LL.addtoBack(node3)
LL.addtoBack(node4)

LL.printLinkedList()














function print(param){console.log(param)}