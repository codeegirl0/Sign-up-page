import { header, footer } from './headerFooter.js'
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
// Remove the warnning in the userName input
let password= document.getElementById('password');
password.addEventListener('keydown', ()=>{
    password.parentNode.querySelector('span').innerText="";
})

// show Errors if submit Button clicked and a field is empty
let input= document.querySelectorAll(".fields"),
submit= document.getElementById("submit")

submit.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let i=0; i<=1; i++){
     if(input[i].value==='' || input[i].value== null){
        input[i].parentNode.querySelector('span').innerText="this field can't be empty";
    }
    else{
        input[i].parentNode.querySelector('span').innerText="";
}
    }
})
