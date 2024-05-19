let menuBtn = document.getElementById("menu-btn");
let nav = document.getElementById("nav");
let overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click",event=>{
    let isActive = nav.classList.contains("active");
    if(isActive){
        nav.classList.remove("active");
        overlay.style.display = "none";
        menuBtn.setAttribute("src","./images/icon-hamburger.svg")
    }
    else{
        nav.classList.add("active");
        overlay.style.display = "block";
        menuBtn.setAttribute("src","./images/icon-close.svg")
    }
    
})