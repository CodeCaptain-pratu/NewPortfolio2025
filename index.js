// Logic for Dark and light theme
let body=document.querySelector("body");
let theme=document.querySelector(".theme");
console.log(theme);
let dark=true;
theme.addEventListener("click",()=>{
    if(dark){
        body.classList.add("light");
        body.classList.remove("dark");
        theme.innerHTML="🌜";
        dark=false;
    }
    else{
        body.classList.add("dark");
        body.classList.remove("light");
        theme.innerHTML="🌞";
        dark=true;
    }
})

// Logic for Hamburger 
let hamburger = document.querySelector(".hamburger");
let links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    links.classList.toggle("active");  
});
