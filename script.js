const loadingScreen=document.querySelector(".loading"); 
const hamMenu=document.querySelector(".menuBtn")
const sideBar=document.querySelector(".sidebar")
const callBtn=document.querySelectorAll(".callBtn")
const prevBtn=document.querySelector(".prev")
const nextBtn=document.querySelector(".next")
const slideDots=document.querySelectorAll(".dot")

const slides=document.querySelectorAll(".cardslides")

window.addEventListener('load',()=>{
     loadingScreen.style.display="none"
})

hamMenu.addEventListener('click',()=>{
    
   sideBar.classList.toggle("activeBar")
    hamMenu.firstElementChild.classList.toggle("bar1")
    hamMenu.children[1].classList.toggle("bar2")
    hamMenu.children[2].classList.toggle("mbar")
    

})


const callFunction=()=>{
     window.location.href = `tel:${+916289672155}`;
     console.log("clicked")
}
callBtn.forEach((e)=>{
     e.addEventListener('click',callFunction)
})

let slidePointer=0;


const slideTimer = setInterval(()=>{

     if(slidePointer!=slides.length-1){
          nextSlide()
     }
     else{
          setSlide()
     }
},3000)
nextBtn.addEventListener('click',()=>{
      clearInterval(slideTimer)
    if(slidePointer!=slides.length-1){
          nextSlide(slidePointer)
    }
    else{
          setSlide()
    }
     
})

prevBtn.addEventListener('click',()=>{
     clearInterval(slideTimer)
     if(slidePointer!=0){
          previousSlide()
     }else{
          setSlide()
     }
     
})

const nextSlide=()=>{
     
          slides[slidePointer].classList.remove("display")
          slideDots[slidePointer].classList.remove("activeDot")
          slidePointer++;
          slides[slidePointer].classList.add("display")
          slideDots[slidePointer].classList.add("activeDot")
          
}

const setSlide=()=>{
     if(slidePointer!=0){
          slides[slidePointer].classList.remove("display")
          slideDots[slidePointer].classList.remove("activeDot")
          slidePointer=0
          slides[slidePointer].classList.add("display")
          slideDots[slidePointer].classList.add("activeDot")
     }
     else{
          slides[slidePointer].classList.remove("display")
          slideDots[slidePointer].classList.remove("activeDot")
          slidePointer=slides.length-1
          slides[slidePointer].classList.add("display")
          slideDots[slidePointer].classList.add("activeDot")
     }
}

const previousSlide=()=>{
     slides[slidePointer].classList.remove("display")
     slideDots[slidePointer].classList.remove("activeDot")
     slidePointer--
     slides[slidePointer].classList.add("display")
     slideDots[slidePointer].classList.add("activeDot")

}
const servicesbtns = document.querySelectorAll(".btn")

servicesbtns[0].addEventListener('click',()=>{
     window.location.href="services.html#Nails"
})




