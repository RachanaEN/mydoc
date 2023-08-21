function demo()
{
    document.body.style.backgroundcolor="skyblue"

}


let btn=document.querySelector('button');
console.log(btn);
btn.addEventListener('click',()=>{

    document.body.style.backgroundcolor="orange"


})
let btn1=document.querySelector('button');
console.log(btn1);
btn1.addEventListener('click',()=>{
    let  div=document.querySelector('div');
    console.log(div);
    div.innerHTML="hello";
    div.style.width="500px";
    div.style.hight="1000px";
    div.style.border="2px solid grey";
    div.style.backgroundColor="hotpink";
    div.style.transition="5s";

})
