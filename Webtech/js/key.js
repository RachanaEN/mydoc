let  kd=document.getElementById('demo1');
kd.addEventListener('keydown',()=>{
    alert(kd.value);
    // document.style.backgroundColor=`#${kd}`;
    console.log("keydown");
})
let ku=document.getElementById('demo2');
ku.addEventListener('keyup',()=>{
    alert(ku.value);
    console.log("keyup");
})
let kp=document.getElementById('demo2');
kp.addEventListener('keyup',()=>{
    let rd=Math.ceil(Math.random()*10000).toString(16);
    console.log(rd);
    document.body.style.backgroundColor=`#${rd}`;
})