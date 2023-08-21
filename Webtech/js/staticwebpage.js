let div=document.querySelector('div');
let input=document.querySelector('input');
input.addEventListener("input",()=>{
    div.style.backgroundColor=input.value;
    div.style.fontSize=input.value;
    div.style.border=input.value;
    div.style.padding=input.value;

    
})
