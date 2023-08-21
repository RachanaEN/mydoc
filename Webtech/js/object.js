// let phone="nokia";
// function iphone()
// {
//     let phone="one plus"
//     function android()
//     {
//         function normal()
//         {
//             return phone;
//         }
//         console.log(normal());
//     }
//     android()
// }
// iphone()
// let  obj2={
//     color:"red",
//     match:"won",
//     computer:{
//         ram:"8gb",
//         processor:"i5"

//     }
// }
// console.log(obj2);
// console.log(obj2.computer.ram);
// console.log(obj2["computer"]["processor"]);
// console.log(obj2.computer.ram="10gb");
// console.log(obj2);
// let rcb={
//     points:10,
//     rivalry:"gg",
//     cricket:function()
//     {
//         let name="kholi";
//         let city="bengaluru";
//         return` ${name},${city}`;
//     }
// }
// console.log(rcb.cricket());
// let rcb1={
//     points:10,
//     rivalry:"gg",
//     cricket:()=>
//     {
//         let city="bengaluru";
//         let name="kholi";
//         return `${city}, ${name};`
//     }
// }
// console.log(rcb1.cricket());
// let rcb3={
//     points:10,
//     rivalry:"gg",
//     cricket:function()
//     {
//         let city="bengaluru";
//         return this.points
//     }
// }
// console.log(rcb3.cricket());
// let rcb5={
//     points:10,
//     rivalry:"gg",
//     cricket:()=>{
//         let city="chennai";
//         let color="yellow";
//         return `${city},${color}`;
//     }
// }
// console.log(rcb5.cricket());
// let rcb4={
//     points:10,
//     rivalry:"gg",
//     cricket:()=>{
//         let city="chennai";
//         let color="yellow";
//         return this.points
//     }

// }
// console.log(rcb4.cricket());
// let obj11=[
//     {
//         id:100,
//         name:"hello"
//     },
//     {
//         id:200,
//         name:"hi"
//     }
// ]
// log
// console.log(obj11[1].name);
// console.log(obj11[2].id);
//     
let obj20=new Object()
console.log(obj20);
obj20.id=200;
obj20.name="keyboard"
console.log(obj20);
let assign={
    day:"wednesday",
    month:"may"
}
let assign1={
    year:2023,
    hours:"24hours"
}
let r= Object.assign(assign,assign1);
console.log(r);
let free={
    day:"sunday",
    date:"today",
    month:"may"

}
console.log(free);
free.day="saturday";
console.log(free);
Object.freeze(free);
free.day="sunday";
console.log(free);
let entry=
{
    country:"India",
    state:"Andhrapradesh",
    place:"lepakshi"
}
console.log("before entries");//converting into arrays 
console.log(entry);
console.log("after the entries");
let en=Object.entries(entry);
console.log(en);
let keys=
{
    country:"India",
    state:"Andhrapradesh",
    place:"lepakshi"
}
let k=Object.keys(keys);
console.log(k);
let values={
    country:"India",
    state:"Andhrapradesh",
    place:"lepakshi"
}
let v=Object.values(values);
console.log(v);



