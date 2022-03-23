"use strict";
//basic types
let id = 3;
let company = "Ngeni";
let isPublic = true;
let numero = "kickass";
let ids = [1, 2, "poo", true];
//tupple
let person = [43, "married", true];
//Array of tupples
let employee;
employee = [
    ['mike', 234],
    ['lynn', 543]
];
//union |
let product_id;
product_id = '21';
//enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left);
const user = {
    id: 1,
    name: "kim"
};
//objects
const Newuser = {
    id: 1,
    name: "linet"
};
// Type assertion
let cid = 1;
let customerId = cid;
//functions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "gator"
};
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    //method constructor
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    //method register
    register() {
        return `${mike.name} is registered`;
    }
}
const mike = new Person(1, "mike pence");
const kim = new Person(2, "kimani");
console.log(mike.register());
