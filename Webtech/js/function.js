// function (){
//     console.log("hi");

// }
// ()
//function
//     function demo(){
//     console.log("hello");
// }
// demo()
// demo()
// demo()
// let  a=function()
    
// {
//     console.log("krishna")
// }
// a()
// a()
// a()
//arrow function
//rule :1
let p=()=>
    console.log("rachana");
p()
p()
//---------ARROW FUNCTION AND RULES-------//
//rule:2

let p1=()=>{
    console.log("Rachana krishna ");
    console.log("krishna Rachana");
}
p1()
//rule:3
// let p2=()=>{
// return
// }
//rule :4
// let p3=()=>{
//     let s="my life mahadev";
//     return s
// }
// console.log(p3)
// //rule:5(don't take log outside when log is inside the  arrow function)
// let p4=()=>{
//     let g="mahadev";
// console.log(g);
// }
// console.log(p4)
// let arrow=(a,b,test)=>{
//     console.log(test+"bengaluru");
//     console.log(a+b);
// }
// arrow(10,20,"hello")
//-----------IIFE-----------//
let v="bye";//v variable is different from the variable v declared inside the function
(function (){
    let  v="hello";
    console.log(v);
})
()
function hof(a,b,color){
    let result=color(a,b);
    return result ;
}
let add=hof(10,20,function(p,q){
    return p+q;

})
console.log(add);
let sub=hof(10,20,function(p,q){
    return p-q;

})
console.log(sub);
let mul=hof(10,20,function(p,q){
    return p*q;

})
console.log(mul);






