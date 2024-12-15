export class Node{
    private _data: number;
    private _next: Node|null = null

    constructor(data: number){
        this._data = data
    }
    
    public static isNode(node: any): node is Node{
        return node instanceof Node
    }

    public get data() : number {
        return this._data
    }

    public get next() : Node|null {
        return this._next
    }

    public set next(v : Node|null) {
        this._next = v;
    }
    
}

export class LL{
    private _head: Node | null = null;
    constructor(){

    }

    
    public get head() : Node|null {
        return this._head
    }

    
    public set head(v : Node|null) {
        this._head = v;
    }
    
    public append(value: number|Node){
        if (!Node.isNode(value)){
            value = new Node(value)
        }
        if (!this._head){
            this._head = value
            return
        }
        let curr = this._head
        while(curr.next){
            curr = curr.next
        }
        curr.next = value
    }

    /**
     * Sequential reversal on every node on traversal
     * TC: O(n)
     * Sc: O(1)
     * @returns head of the reversed ll
     */
    public reverse(){
        let curr = this._head
        if (!curr || !curr.next){
            return
        }
        let prev = null
        let next: Node|null = curr.next
        while(curr){
            curr.next = prev
            prev = curr
            curr = next
            next = next?.next ?? null
        }
        this.head = prev
    }

    /**
     * reversal using recursion
     * TC: O(n) || SC: O(1)
     */
    private _reverseRecursion(node: Node): Node{
        const nextNode = node.next
        if (!nextNode){
            return node
        }
        let newHead: Node = this._reverseRecursion(nextNode)
        nextNode.next = node
        node.next = null
        return newHead
    }

    public reverseRecursive(){
        let curr = this._head
        if (!curr) return
        this.head = this._reverseRecursion(curr)

    }

    public print(){
        let curr = this._head
        if (!curr) return
        while(curr){
            console.log(curr.data)
            curr = curr.next
        }
    }
}

const ll = new LL()

ll.append(1)
ll.append(2)
ll.append(3)
ll.append(4)
ll.append(5)

ll.print()

// ll.reverse()
ll.reverseRecursive()

ll.print()