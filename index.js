// Logic for Dark and light theme
let body=document.querySelector("body");
let theme=document.querySelector(".theme");
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

// active links 
const links = document.querySelectorAll('.link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

// typing animation 
  gsap.registerPlugin(TextPlugin);
    gsap.to("#typingText", {
      duration: 2,
      text:"Web Developer",
      ease: "none",
    });

  // blinking cursor using GSAP (infinite loop)
  gsap.to("#cursor", {
    opacity: 0,
    repeat: -1,
    yoyo: true,
    duration: 1,
    ease: "power1.inOut"
  });


  // hamburger click event 
  let hamburger=document.querySelector(".hamburger");
  let socialLinks=document.querySelector(".socialLinks");
  let link=document.querySelector(".socialLinks a");
  hamburger.addEventListener("click",()=>{
   socialLinks.classList.toggle('active');
  })

//Form submission 
let form = document.querySelector("form");
// console.log(form);
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  const formData = new FormData(form);
  console.log(formData);
  fetch("https://formspree.io/f/mvgrbvaj",{
    method:"POST",
    body:formData,
    headers:{
      'accept':'application/json',
    }
  })
  .then(response=>{
    if(response.ok){
      form.reset();
      window.location.href="thankyou.html";
    }
    else{
      alert("Form submit again");
    }
  })
  .catch(error=>{
    console.error("Error Occurred:",error);
    alert("Something went wrong, Please check your connection and try again"); 
  })
})

// Project Cards 
let projectData=[
  {
    img:"img/Portfolio.png",
    name:"Portfolio",
    projectLink:"project link"
  },
   {
    img:"img/Fit_N_Fine.png",
    name:"Gym Management",
    projectLink:"https://getfitanfi9withus.netlify.app/"
  },
  {
    img:"img/EasyLearn.png",
    name:"EasyLearn",
    projectLink:"https://educationhouse.netlify.app/"
  }
]
let str="";
let cardsContainer = document.querySelector(".cardsContainer")
projectData.forEach((project)=>{
  str+=`<div class="project-card">
                <div class="project-img">
                    <img src="${project.img}" alt="portfolio Image">
                </div>
                <div class="project-content">
                    <div class="top">
                        <h3>${project.name}</h3>
                        <a href="${project.projectLink}"><i class="ri-external-link-line"></i></a>
                    </div>
                    <div class="techStack">
                        <div class="stack">
                            <i class="ri-html5-fill" style="color: orangered;"></i>
                            <h4>Html</h4>
                        </div>
                       <div class="stack">
                         <i class="ri-css3-fill" style="color: blue;"></i>
                         <h4>CSS</h4>
                       </div>
                       <div class="stack">
                            <i class="ri-javascript-fill" style="color:yellow"></i>
                            <h4>Js</h4>
                       </div>
                    </div>
                </div>
                </div>`;

})
cardsContainer.innerHTML=str;