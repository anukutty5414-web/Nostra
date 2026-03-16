let slideIndex=0
showSlide()

function showSlide(){
let slides=document.getElementsByClassName("slide")

for(let i=0;i<slides.length;i++){
slides[i].style.display="none"
}

slides[slideIndex].style.display="block"
}

function nextSlide(){
let slides=document.getElementsByClassName("slide")
slideIndex++

if(slideIndex>=slides.length){
slideIndex=0
}

showSlide()
}

function prevSlide(){
let slides=document.getElementsByClassName("slide")
slideIndex--

if(slideIndex<0){
slideIndex=slides.length-1
}

showSlide()
}

setInterval(nextSlide,3000)

//selecting Side Navbar,MenuIcon
var sidenav=document.getElementById("sidenav")
var menuicon=document.getElementById("menuicon")
var closenav=document.getElementById("closenav")

menuicon.addEventListener("click",function()
{
    sidenav.style.right=0
})
closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})
