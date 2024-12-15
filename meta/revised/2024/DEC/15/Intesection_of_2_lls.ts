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

    public findIntersection(secondHead: Node|null): number{
        const firstHead = this._head
        if (!firstHead || !secondHead){
            return -1
        }
        let t1: Node|null = firstHead
        let t2: Node|null = secondHead

        // move till either one of them reaches the last node
        while (t1 && t2){
            if (t1 === t2){
                return t1.data
            }
            t1 = t1.next
            t2 = t2.next
            if (!t1 && !t2){
                return -1
            }
            if (!t1){
                t1 = secondHead
            }
            if (!t2){
                t2 = firstHead
            }
        }
        return -1
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


const lla = new LL()
lla.append(1)
lla.append(2)
lla.append(3)
lla.append(4)
lla.append(5)

const llb = new LL()
llb.append(11)
llb.append(12)
llb.append(13)
llb.append(14)


const intersectingNode = new Node(6)
lla.append(intersectingNode)
llb.append(intersectingNode)

lla.append(7)
lla.append(8)
lla.append(9)

console.log(lla.findIntersection(llb.head))

