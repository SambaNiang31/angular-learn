class Animal {
    constructor ( public name:string, public weight: number){
    }
}

const lulu = new Animal("Cat", 7);

class Narval extends Animal{
    constructor (public length: number){
        super("Gerard", 400);
    }
    detect (object:any){
        console.log(object)
    }
}

const gerard = new Narval(30);


console.log(gerard);
gerard.detect(lulu);

// generics: we make a parameter T for the type: type can change <>
//observable pattern
class Viewer <T>{
    viewable: T
    view(thing:T){
        this.viewable = thing;
    }
}
let viewer = new Viewer <Animal>();
viewer.view(lulu);
console.log(viewer);

const lorem = `
    This is multilin 
   <html> 
    <div>
        ${gerard.name}
     </div>
   </html>
`;

console.log(lorem);

type operation = (x:number, y:number)=> number;
let add = (x, y) => x+y;
console.log(add(12,16));

let div = (x:number, y:number) => x/y;

//duck typiing works for any type, including function
let myOperation: operation = div;

//Splat operator
let people = ["Jim", "John", "Jack"];
const morePeople = people.push("Jule");// Push is mutative, not concat
console.log('People : ', people);
console.log("more people : ", morePeople);

const morePeopleSexy = [... people, "Jacky", "Joseph"];
console.log("morePeopleSexy : ", morePeopleSexy);

//With objects: only ES 2017
const house = {
    size: 50,
    price: 500000
};
let palace ={
    ...house,
    employees: 5
};
console.log("palace : ", palace);

let rent = {
    people: people,
    palace: palace,
    price: 10000,
    days: 7
};

console.log("rent : ", rent);