// Logic for Dark and light theme
let body=document.querySelector("body");
let theme=document.querySelector(".theme");
console.log(theme);
let dark=true;
theme.addEventListener("click",()=>{
    if(dark){
        body.classList.add("light");
        body.classList.remove("dark");
        theme.innerHTML=`<i class="ri-moon-line"></i>`;
        dark=false;
    }
    else{
        body.classList.add("dark");
        body.classList.remove("light");
        theme.innerHTML=`<i class="ri-sun-line"></i>`;
        dark=true;
    }
})

// Logic for Hamburger 
let hamburger = document.querySelector(".hamburger");
let links = document.querySelector(".links");

hamburger.addEventListener("click", () => {
    links.classList.toggle("active");  
});
