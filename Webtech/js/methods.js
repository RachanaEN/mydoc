let a=document;
console.log(a);
let b=document.title;
console.log(b);
let c=document.head;
console.log(b);

let d=document.title="change";
console.log(d);
let f=document.URL;
console.log(f);
let d1=document.getElementById('ss');
console.log(d1);
d1.style.color="blue";
d1.innerHTML="<p> yes it is</P>";//inner html gives only content
d1.innerText="<p> hello how are you </p>";//inner html giving tag along with content
// tag
let d2=document.getElementsByClassName('demo');
console.log(d2);
d2[0].style.color="aqua";
d2[1].style.backgroundColor="purple";
d2[2].innerHTML="hello";
let r=document.getElementsByTagName('section');
console.log(r);
r[1].style.backgroundColor='grey';
r[0].style.backgroundColor='hotpink';
let k=document.querySelector(".demo");
console.log(k)
// queryselectorAll
let kr=document.querySelectorAll(".demo1");
console.log(kr);
kr[2].style.backgroundColor="yellow";



