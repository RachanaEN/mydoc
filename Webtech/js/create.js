let create=document.createElement('div');
console.log(create);
create.innerText="hello";
let head=document.createElement('h3');
console.log(head);
head.innerText="hi";
// create.append(head);
// create.append("hello");
create.appendChild(head);
//create.appendchild("hello");//error
let a=document.createElement('h6');
console.log(a);
a.innerText="hi";
a.id="test";
a.className="demo";
document.body.append(a);
/*let v=document.getElementById('test');
console.log(v);
v.style.color="red";//its targeting above element that is h6 the id name of h6*/
let v=document.getElementsByClassName('demo');
console.log(v);
v[0].style.color="red";
let table=document.createElement('table');
console.log(table);
table.style.border="5px solid red";
let tr=document.createElement('tr');
let tr1=document.createElement('td');
let tr2=document.createElement('td');
let tr3=document.createElement('td');
tr1.style.border="3px solid black";
tr2.style.border="3px solid black";
tr3.style.border="3px solid black";
document.body.append(table);
table.append(tr);
tr.append(tr1);
tr.append(tr2);
tr.append(tr3);


tr1.innerText='1';
tr2.innerText='2';
tr3.innerText='3';
let trr=document.createElement('tr');
let tr4=document.createElement('td');
let tr5=document.createElement('td');
let tr6=document.createElement('td');
tr4.style.border="3px solid black";
tr5.style.border="3px solid black";
tr6.style.border="3px solid black";
table.append(trr);
trr.append(tr4);
trr.append(tr5);
trr.append(tr6);
tr4.innerText='4';
tr5.innerText='5';
tr6.innerText='6';
let trrr=document.createElement('tr');
let tr7=document.createElement('td');
let tr8=document.createElement('td');
let tr9=document.createElement('td');
tr7.style.border="3px solid black";
tr8.style.border="3px solid black";
tr9.style.border="3px solid black";
table.append(trrr);
trrr.append(tr7);
trrr.append(tr8);
trrr.append(tr9);
tr7.innerText='7';
tr8.innerText='8';
tr9.innerText='9';












