const hamMenu=document.querySelector(".menuBtn")
const sideBar=document.querySelector(".sidebar")
const callBtn=document.querySelector(".callBtn")
hamMenu.addEventListener('click',()=>{
    
   sideBar.classList.toggle("activeBar")
    hamMenu.firstElementChild.classList.toggle("bar1")
    hamMenu.children[1].classList.toggle("bar2")
    hamMenu.children[2].classList.toggle("mbar")
    

})
callBtn.addEventListener('click',()=>{
     window.location.href = `tel:${+916289672155}`;
     console.log("clicked")
})