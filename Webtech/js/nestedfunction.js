// function grandparent(){
//     let  s=200;
//     console.log(s);
//     function parent(){
//         let b=300;
//         console.log(b);
//         console.log(s);
//         function child(){
//             let c=500;
//             console.log(c);
//             console.log(b);
//             console.log(s);
//         }
//         return child;
//     }
//     return parent;
// }
// grandparent()()()
let a=
{
}

    console.log(a,typeof a);
    let b=new Boolean()
    console.log(b,typeof b);
    let c=new Number();
    console.log(c,typeof c);
    let obj={
        id:1123,
        name:"rachu"
        
    }
    console.log(obj);
    //add key and value to the object
    obj.place="Bengaluru";
    console.log(obj);
    obj.name="mahadev";
    console.log(obj);
    console .log(obj.name);
    console.log(obj["name"]);
    delete obj.id;
    delete obj["name"];
    console.log(obj);

