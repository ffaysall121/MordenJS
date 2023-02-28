"use strict";

// const { object } = require("prop-types");

let name1 = ["Faysal","Hafiz","limon","shubrotor"];
let name2 =["mim","chitra","moriyom","nishat"];
//using spread operator
let allStudent=[...name1,...name2,"Mithu","Ismail","momin","Ehsan"];
console.log(allStudent);
////using push method
name1.push(name2)
console.log(name1);
///rest parameter;
/// best practice rest parameter use as last parameter.
function calculate(...number){
    let numbers =[...number];
    let sum=0;

    //forEach loop
    number.forEach(element => {
        sum+=element;

    });

    //for of loop
    let add=0;
    for(let j of number){
         add=add+j;
    }


       console.log(sum);
       console.log(add);

    console.log(numbers)
}

calculate(5,20,3,10,45,66,22,52,35,62,14,10,25,99);

///Dynamic Function

let add= function(a,b)
{
  let sum=a+b;
  console.log(sum)
}
add(10,60);

// var keyword, it can reassigned and redeclare.
var names= "Faysal";
names='Limon';//reassigned
var names='Hafizur';//redeclare
console.log(names);
// let  keyword, it can only reassigned.
let x=20;
x=10;
console.log(x)

///const keyWord,do not allow reassigned and redeclare.
const y=20;

console.log(y)


//local scope variable.it can use only function block.
 let num=99; //global variable
function local(){
    let total=100;
    console.log(total);
}
//console.log(total);//not accessible from outside in scop
console.log(num)///globals scope variable can accessible from anywhere.


///variable hoisting 
fullName="Faysal Ahmed";
console.log(fullName);
var fullName;//first assign then declaring.

///object in javaScript

var human={
    name:true,
    age:true,
   activities:{
    run:true,
    sit:true,
    swimming:true,
    fly:false,
    eat:{
        rice:true,
        brad:true,
        visitable:true,
        drink:{
            tea:true,
            water:true,
        }

    }
   }

}
console.log(human);
console.log(human.activities.eat.drink.tea);

//for in loop best for using object traversing.
 for (const props in human) {
    console.log(props);
    if (Object.hasOwnProperty.call(human, props)) {
        const element = human[props];
        console.log(element)
    }
 }

//ES6 Function.

//Rest parameter

function something(...args) 
{
    let x =[...args]
     console.log(x)
}

something(1, 2, 3, 4);
 
//we can add tow function 
function one(){
    return 50;
}
function two()
{ 
    return 20;
}
  console .log(one()+two());

  // we can store a function in a variable.
  //anonymous function.
  var wishes = function(){

    return 'hello world '
  }


  //arrow function->    ()=>{}
 let wish = ()=>console.log('hello world')
  let arrow =()=>{
     return 'hello world ';   
  }
  const xyz = arrow();
console.log(wishes()," ",xyz)

///ES6 Array

let mark =['faysal', 'hafiz','limon','Ismail']

for (const item of mark)  {
    console.log(item);
}
var block = ['shamimabad1','shamimabad2','shamimabad3']
var city=['dhaka','comilla','sylhet','chitagong'];
var country=['bangladesh','india','chin'];

let place=[block,city,country]


console.log(place)  

//de-structuring
var [a,,b]=place;
console.log(a,b);

let myMap=new Map();
myMap.set('key1','Faysal Ahmed')
myMap.set('key2','Forhad Bhuiyan')
myMap.set('key3','Farabi Islam')
myMap.set('key4','Sharmin Sultana')
myMap.delete('key1');
for (const vlu of myMap.values()) {
    console.log(vlu)
}
console.log(myMap.get('key1'));
console.log(myMap.get('key3'));
myMap.clear();
for (const ky of myMap.keys()) {
    console.log(ky)
}
console.log(myMap.has('key1'));
//ES6 set.
 let mySet = new Set();
 mySet.add('Dhaka');
 mySet.add('Sylhet');
 mySet.add('B.Baria');
 mySet.add('comilla');
 mySet.add('Sylhet');
 mySet.add('Dhaka');
 console.log(mySet)
mySet.delete('comilla');
console.log(mySet);
console.log(mySet.values());
console.log(mySet.has('Rongpur'));
mySet.clear();
console.log(mySet);

//ES6 class.


