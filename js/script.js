const loadingScreen=document.querySelector(".loading"); 
const hamMenu=document.querySelector(".menuBtn")
const sideBar=document.querySelector(".sidebar")
const callBtn=document.querySelectorAll(".callBtn")




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


// const servicesbtns = document.querySelectorAll(".btn")

// servicesbtns[0].addEventListener('click',()=>{
//      window.location.href="services.html#Nails"
// })




