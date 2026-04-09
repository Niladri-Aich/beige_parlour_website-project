// Service filter functionality 

const filterBtn = document.querySelector(".filter");
const filterOptions=document.querySelector(".filter_options")
const dropArrow=document.querySelector(".dropArrow")
const options=document.querySelectorAll(".option")

const handleDropdown=()=>{
    filterOptions.classList.toggle("activeFilter")
    dropArrow.classList.toggle("activeDropdown")
}

filterBtn.addEventListener('click',handleDropdown)

options.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        filterBtn.children[0].innerText=e.target.innerText
        handleDropdown()
        })
 
})

//container Scrolling



