//___________object_____________/
//
// declare an object 'obj' and input  some random values
const obj = {
    name: "Bolaji",
    no: 5821,
    email: "jacksparrow@xyz.clown",
    phoneNo: "9876543210"
}

// Destructuring the objects
const {name, no, ...contact} = obj;
console.log(name, no, contact) //output = Bolaji 5821 {email:"jacksparrow@xyz,cown", phoneNo: "9876543210"}

//





//___________array_____________/
const arr = ["Bolaji", "vegan", "jacksparrow", "noob"];
const [ , , , a] = arr // ignore elements with commas
console.log(a) //output = noob


//___________array of objects_____________/
const props = [
    { id: 1, nam: 'Fizz'},
    { id: 2, nam: 'Buzz'},
    { id: 3, nam: 'Fizz Buzz'}
];

const[ , , {nam}] = props;
console.log(nam); //output = FizzBuzz
