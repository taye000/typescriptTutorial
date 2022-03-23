//basic types
let id: number = 3

let company: string = "Ngeni"

let isPublic: boolean = true

let numero: any = "kickass"

let ids: any[] = [1,2, "poo", true]

//tupple
let person: [number, string, boolean] = [43, "married", true]

//Array of tupples
let employee: [string, number][]

employee = [
    ['mike', 234],
    ['lynn', 543]
]

//union |
let product_id: number | string

product_id = '21'

//enum
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction.Left)

//objects
type User = {
    id: number
    name: string
}
const user: User = {
    id: 1,
    name: "kim"
}

//objects
const Newuser: {
    id: number,
    name: string
} = {
    id: 1,
    name: "linet"
}

// Type assertion
let cid: any = 1

let customerId = cid as number

//functions
function addNum(x:number, y:number): number {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}

//interfaces. You cannot use interface with unions.
interface UserInterface {
    id: number
    name: string
}
const user1: UserInterface = {
    id: 1,
    name: "gator"
}

//interface with functions
interface mathFunc {
    (x: number, y: number): number
}
const add: mathFunc = (x: number, y:number): number => x + y
const sub: mathFunc = (x: number, y:number): number => x - y

//classes
class Person {
    id: number
    name: string
//method constructor
    constructor(id: number, name: string){
        this.id = id
        this.name = name
    }
//method register
    register(){
        return `${mike.name} is registered`
    }
}
const mike = new Person(1, "mike pence")
const kim = new Person(2, "kimani")

console.log(mike.register())