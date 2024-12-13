class Node_{
    public data: number|null = null
    public next: Node_ | null = null;
    public static isValidNode(node: any): node is Node_{
        return node instanceof Node_
    }
    public constructor (data: number) {
        this.data = data
    }
}

class LL{

    /*
     * SECTION: VARIABLES
     */
    public head: Node_ | null = null;
    
    constructor (){}
    
    /*
     * SECTION: FUNCTIONS
     */

    // push back
    public pushBack(value: number | Node_){
        if (!Node_.isValidNode(value)){
            value = new Node_(value)
        }
        if (!this.head){
            this.head = value
            return
        }
        let curr = this.head
        while(curr.next) curr = curr.next
        curr.next = value
    }

    // print all
    public printAll(node?: Node_){
        console.log(`Printing the traversal`)
        if (!this.head) return;
        let curr: Node_|null = node ?? this.head
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }

    public reverse(){
        let prev: Node_|null = null;
        let curr: Node_|null = this.head
        if (!curr){
            return
        }
        let next: Node_|null = curr.next
        while(curr){
            curr.next = prev
            prev = curr
            curr = next
            next = next?.next ?? null
        }
        this.head = prev
    }

    public reverseRecursive(node?: Node_|null): Node_|null{
        
        // If no input provided, select the head
        if (node===undefined){
            node = this.head
        }

        // base case
        if (node===null || !node.next){
            return node
        }

        // An ll of < 1 node never reaches here 
        const newHead = this.reverseRecursive(node.next)

        const mainChar = node.next

        mainChar.next = node
        node.next = null

        return newHead
    }

}

const ll = new LL()

// popualte the ll
ll.pushBack(new Node_(1))
ll.pushBack(2)
ll.pushBack(3)
ll.pushBack(4)
ll.pushBack(5)
ll.printAll()

// reverse the ll
ll.reverse()
ll.printAll()

// reverse the ll recursively
ll.head = ll.reverseRecursive()
ll.printAll()