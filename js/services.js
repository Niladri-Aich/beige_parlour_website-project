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

//handleFilterBtn

    const handleFilter=(filterValue)=>{
        const psections=document.querySelectorAll('.psection')
        psections.forEach((section)=>{
            section.classList.add("inactive")
        })
        console.log(filterValue)
        if(filterValue=="ALL SERVICES"){
           psections.forEach((section)=>{
            section.classList.remove("inactive")
        })
        
        }else{
            const val=filterValue.toLowerCase();
            console.log(val)
            const section= document.getElementById(val)
            section.classList.remove('inactive')
        
    }
}

options.forEach((elem)=>{
    elem.addEventListener('click',(e)=>{
        filterBtn.children[0].innerText=e.target.innerText
        handleDropdown()
        handleFilter(e.target.innerText)
        })
 
})
const handleBooking=(pname,price)=>{

  const phoneNumber="+916289672155"
  const message=(`hi I Want To Book Your Services, Service Name :${pname.innerText}  Price:${price.innerText}`)
  const encodedMessage=encodeURIComponent(message)
  const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`; 
  window.open(url, '_blank')
  
}


const productContainer=document.querySelector('.products_container')
const generateProductCard=(item,product_price)=>{
    const productCard=document.createElement('div')
    productCard.classList.add('product_card')
    const container1=document.createElement('container1')
    container1.classList.add('container1')
    const img=document.createElement('img')
    img.src="images/servicehome/skin.jpg"
    img.classList.add('pimage')
    const pdesc = document.createElement('div')
    pdesc.classList.add('pdesc')
    const pname=document.createElement('p')
    pname.classList.add('pname')
    pname.innerText=item
    const price=document.createElement('p');
    price.classList.add('price')
    price.innerText=`Rs ${product_price}` 
    pdesc.appendChild(pname)
    pdesc.appendChild(price)
    container1.appendChild(img)
    container1.appendChild(pdesc)

    const container2= document.createElement('div')
    container2.classList.add('container2')

    const bookNow=document.createElement('bookNow')
    bookNow.classList.add('bookNow')
    bookNow.addEventListener('click',()=>{
        handleBooking(pname,price)
    })
    const icon=document.createElement('img')
    icon.src="images/UI_ICONS/output-onlinegiftools.gif"
    const text=document.createElement('p')
    text.innerText="BOOK NOW"
    bookNow.appendChild(icon)
    bookNow.appendChild(text)
    container2.appendChild(bookNow)

    productCard.appendChild(container1)
    productCard.appendChild(container2)

    return productCard
}

const handleData=(data)=>{
    
        const section=document.createElement('div')
        section.classList.add("psection")
        section.id=data.section
        
        productContainer.appendChild(section)

        const products=data.products
        products.forEach((p)=>{
            const card=generateProductCard(p.item,p.price)
            section.appendChild(card)
        })
}



//fetching Data from Json



async function fetchData() {
    try {
        const response = await fetch('./services.json');
        // Store the parsed JSON data in a variable
        const data = await response.json(); 
        console.log(data[0].products); // You can now use the variable 'data'
      
        data.forEach((e)=>{
            handleData(e);
        })
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}
fetchData();


//book now btn functionality

