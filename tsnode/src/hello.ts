console.log("Hello Bruh ! ");

let text : string = "Hello";

function double (x: number) {
    return 2 * x;
}

const result = double(text.length);

console.log("double length " +  result);

// Arrays are typed already
function maxReducer (max: number, next:number){
    return next> max ? next: max;
}
let max = [2, 10, 223, 4, -4, -1,0].reduce(maxReducer)

let array: string [] = [];
array.push("12", "15");
console.log("array in string " + array);

class User {
    name: string;
    age:number;
    city:City
}
class City {
    name: string;
}
let peter = new  User();
peter.name= "Peter";
let london = new City();
peter.city = london;

let julia = {
    name: "Julia",
    age: 24,
    city: {
        name:"Toulouse"
    }
};



peter = julia; // this is duck typing




