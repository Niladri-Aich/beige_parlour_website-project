const prevBtn=document.querySelector(".prev")
const nextBtn=document.querySelector(".next")
const slideDots=document.querySelectorAll(".dot")

const slides=document.querySelectorAll(".cardslides")
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

//adding functionality to service category btns

const btns=document.querySelectorAll(".btn")

btns.forEach((btn)=>{
     btn.addEventListener('click',()=>{
          const btnId=btn.id
          window.location.href=`/services.html?name=${btn.id}`
     })
})