import { header, footer } from './headerFooter.js';

//insert the header and the footer
let body =document.getElementsByTagName("BODY")[0];
body.insertAdjacentHTML("afterbegin", header);
body.insertAdjacentHTML("beforeend", footer);

// show and hide the nav list in smallscreen sizes
let toggleIcon= document.getElementsByClassName("fas")[0];
let ul= document.getElementsByClassName("nav")[0];
toggleIcon.addEventListener('click', ()=>{
    const list= "fa-list";
    const times= "fa-times";
    toggleIcon.classList.toggle(list);
    toggleIcon.classList.toggle(times);
    ul.classList.toggle("show");
    ul.classList.toggle("hide");
    
})
// input variables
let input= document.querySelectorAll(".fields"),
 submit= document.getElementById("submit"),
 password= document.getElementById("password"),
 Inpname= document.getElementById("name");

 // show Errors if submit Button clicked and a field is empty
submit.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i=0; i<=3; i++){
     if(input[i].value==='' || input[i].value== null){
        input[i].parentNode.querySelector('span').innerText="this field can't be empty";
    }
    else{
        input[i].parentNode.querySelector('span').innerText="";
}
    }
})

// Check Name Function
Inpname.addEventListener('input', ()=>{
    if(Inpname.value.length < 4){
        Inpname.parentNode.querySelector('span').innerText="enter at less 4 characters";}
    else if(Inpname.value.length > 10){
        Inpname.parentNode.querySelector('span').innerText="this name is too long";}
    else{
        Inpname.parentNode.querySelector('span').innerText="";
    }
});

 // Check Email function
let Email = document.getElementById("email");
Email.addEventListener('input', ()=>{
    let a= /^[a-zA-Z0-9]+@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(Email.value.match(a)){
        Email.parentNode.querySelector('span').innerText="";
    }
    else{
      Email.parentNode.querySelector('span').innerText="this email is not valid";
    }
})

// Check password function
password.addEventListener('input', ()=>{
    let letters= /[a-zA-Z]/,
        numbers=/[0-9]/,
        special=/[/[!"%&/()=?@~`\\.\';:+=^*_-]/;
    let val= password.value;
    if(letters.test(val) && numbers.test(val) && special.test(val) && val.length >= 5 && val.length <= 20 ){
        password.parentNode.querySelector('span').innerText="password is strong";
        password.parentNode.querySelector('span').style.color='green';
    }
    else if( val.length > 20){
        password.parentNode.querySelector('span').innerText="password couldn't be more than 20 characters";
        password.parentNode.querySelector('span').style.color='red';
    }
    else{
        password.parentNode.querySelector('span').innerText="password is weak";
        password.parentNode.querySelector('span').style.color='red';
    }
})
// Remove the warnning in the userName input
let userName= document.getElementById('userName');
userName.addEventListener('keydown', ()=>{
    userName.parentNode.querySelector('span').innerText="";
})

// Eye function
let eye=document.getElementById("eye"),
    eyeSpan= document.getElementById("eyeSpan"),
    showPass= "fa-eye",
    hidePass="fa-eye-slash";
eye.addEventListener('click', ()=>{
    eye.classList.toggle(hidePass);
    eye.classList.toggle(showPass);
    if(eye.classList.contains(hidePass)){
        password.type="text";
        eyeSpan.innerText="hide password";
    }
    else{
        password.type="password";
        eyeSpan.innerText="show password";
    }
})
