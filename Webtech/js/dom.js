let btn=document.querySelector('button');
btn.addEventListener('click',(e)=>{
    let un=document.getElementById('un').value;
    let  pass=document.getElementById('pass').value;
    console.log(un,pass);
    // let div=document.querySelector('div');
    // div.innerHTML=`${un} ${pass}`;
    // div.style.height="50px";
    // div.style.width="100px";
    // div.style.border="5px solid black";
    e.preventDefault();//it is method which is used to prevent the data which entered in the form by going to the data base server/
    //when we are using form data is send to the data base in order to prevent the data to not go to the  data base and appear in the interface by 
    //by using prevent default method
})