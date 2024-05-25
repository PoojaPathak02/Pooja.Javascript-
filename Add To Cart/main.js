
let mainSection = document.getElementById("data-list-wrapper");

// pitch
let pitchTitleInput = document.getElementById("pitch-title");
let pitchImageInput = document.getElementById("pitch-image");
let pitchCategoryInput = document.getElementById("pitch-category");
let pitchfounderInput = document.getElementById("pitch-founder");
let pitchPriceInput = document.getElementById("pitch-price");
let pitchCreateBtn = document.getElementById("add-pitch");

// Update pitch
let updatePitchIdInput = document.getElementById("update-pitch-id");
let updatePitchTitleInput = document.getElementById("update-pitch-title");
let updatePitchImageInput = document.getElementById("update-pitch-image");
let updatePitchfounderInput = document.getElementById("update-pitch-founder");
let updatePitchCategoryInput = document.getElementById("update-pitch-category");
let updatePitchPriceInput = document.getElementById("update-pitch-price");
let updatePitchBtn = document.getElementById("update-pitch");

//Update price
let updatePricePitchId = document.getElementById("update-price-pitch-id");
let updatePricePitchPrice = document.getElementById("update-price-pitch-price");
let updatePricePitchPriceButton = document.getElementById("update-price-pitch");

//sort and filter
let sortAtoZBtn = document.getElementById("sort-low-to-high");
let sortZtoABtn = document.getElementById("sort-high-to-low");
let filterFood = document.getElementById("filter-Food");
let filterElectronics = document.getElementById("filter-Electronics");
let filterPersonalCare = document.getElementById("filter-Personal-Care");

//Search by title/founder

let searchBySelect = document.getElementById("search-by-select");
let searchByInput = document.getElementById("search-by-input");
let searchByButton = document.getElementById("search-by-button");

// Problem 1. List of pitches on page load 

let productData

function Fetchdata()
{
    fetch("http://localhost:3000/pitches")
    .then((res)=>res.json())
    .then((data)=>{
      CardList(data)
      productData=data
    }
  )
    .catch((err)=>console.log(err))
}
Fetchdata()

function CardList(data)
{
    // console.log(data)
    const store=data.map((el)=>SingleCard(el.id,el.image,el.title,el.founder,el.category,el.price))
    mainSection.innerHTML=store.join("")
}

function SingleCard(id,image,title,founder,category,price)
{
    let Card =`
    <a href="description.html?title=${encodeURIComponent(title)}&image=${encodeURIComponent(image)}&founder=${encodeURIComponent(founder)}&category=${encodeURIComponent(category)}&price=${encodeURIComponent(price)}">
            <div class="card" data-id=${id}>
              <div class="card-img">
                <img src=${image} alt="Pitch">
              </div>
              </a>
              <div class="card-body">
                <h4 class="card-title">Title:${title}</h4>
                <p class="card-founder">Founder:${founder}</p>
                <p class="card-category">Category:${category}</p>
                <p class="card-price">Price:${price}</p>
                <button data-id=${id} class="card-link">Edit</button>
                <button data-id=${id} class="card-button">Delete</button>
              </div>
              </div>
              `

        return Card

}
 // POST DATA
 pitchCreateBtn.addEventListener("click",()=>{
    let product={
        title:pitchTitleInput.value,
        image:pitchImageInput.value,
        founder:pitchfounderInput.value,
        category:pitchCategoryInput.value,
        price:pitchPriceInput.value
    }
    fetch("http://localhost:3000/pitches",{
  method:'POST',
  headers:{
    'Content-Type': 'application/json',
  },
  body:JSON.stringify(product),
 })
 .then((res)=>res.json())
 .then((data)=>{
  console.log(data)
  alert("Product Added")
 })
 .catch((err)=>console.log(err))
 })
 

 //DELETE DATA
 document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("card-button")){
  deleteData(e.target.dataset.id);}
 })

 function deleteData(id)
 {
  fetch(`http://localhost:3000/pitches/${id}`,{
    method:'DELETE'
  })
  .then((res)=>res.json)
  .then((data)=>{
    alert("Deleted")
    console.log(data)
  })
  .catch((err)=>console.log(err))
 }

//FILTER DATA
filterFood.addEventListener("click",()=>{
  let filterData=productData.filter((el)=>el.category=="Food")
  CardList(filterData)
})

filterElectronics.addEventListener("click",()=>{
  let filterData=productData.filter((el)=>el.category=="Electronics")
  CardList(filterData)
})

filterPersonalCare.addEventListener("click",()=>{
  let filterData=productData.filter((el)=>el.category=="Personal Care")
  CardList(filterData)
})

//SORT DATA
sortAtoZBtn.addEventListener("click",()=>{
  let sortAtoZdata=productData.sort((a,b)=>a.price-b.price)
  CardList(sortAtoZdata)
})

sortZtoABtn.addEventListener("click",()=>{
  let sortZtoAdata=productData.sort((a,b)=>b.price-a.price)
  CardList(sortZtoAdata)
})

//UPDATE PART
document.addEventListener("click",(e)=>{
  if(e.target.classList.contains("card-link")){
    let id=e.target.dataset.id;
    populateData(id)
  }

})
function populateData(id)
{
  fetch(`http://localhost:3000/pitches/${id}`)
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    updatePitchTitleInput.value=data.title
    updatePitchCategoryInput.value=data.category
    updatePitchImageInput.value=data.image
    updatePitchPriceInput.value=data.price
    updatePitchfounderInput.value=data.founder
    updatePitchIdInput.value=data.id
  })
  .catch((err)=>console.log(err))
}
 updatePitchBtn.addEventListener("click",()=>{
  let updateData={
    title:updatePitchTitleInput.value,
    image:updatePitchImageInput.value,
    founder:updatePitchfounderInput.value,
    price:updatePitchPriceInput.value,
    category:updatePitchCategoryInput.value,
    id:updatePitchIdInput.value
  }
  fetch(`http://localhost:3000/pitches/${updateData.id}`,{
    method:'PUT',
    headers:{
      'Content-Type': 'application/json',
    },
    body:JSON.stringify(updateData)
  }).then((res)=>res.json)
  .then((data)=>{
    console.log(data)
    alert("Data updated")
  })
  .catch((err)=>console.log(err))

 })
 //UPDATE PRICE
 document.addEventListener("click", (e) => {
  // e.preventDefault()
  if (e.target.classList.contains("card-link")) 
  {
      let id = (e.target.dataset.id)
      UpdatePrice(id)
  }
})

function UpdatePrice(id)
{
  fetch(`http://localhost:3000/pitches/${id}`)
  .then((res)=>res.json())
  .then((data)=>{
      console.log(data)

      updatePricePitchId.value=data.id,
      updatePricePitchPrice.value=data.price
      updatePitchTitleInput.value=data.title,
      updatePitchImageInput.value=data.image,
      updatePitchfounderInput.value=data.founder,
      updatePitchCategoryInput.value=data.category
      
  })
  .catch((err)=>console.log(err))
}

updatePricePitchPriceButton.addEventListener("click",()=>{

  let UpdatePriceData={
      price:updatePricePitchPrice.value,
      id:updatePricePitchId.value,
      title:updatePitchTitleInput.value,
      image:updatePitchImageInput.value,
      founder:updatePitchfounderInput.value,
      category:updatePitchCategoryInput.value,
  }

  console.log(UpdatePriceData)

  fetch(`http://localhost:3000/pitches/${UpdatePriceData.id}`,{
      method:"PUT",
      headers:{
          "Content-Type": "application/json",
      },
      body:JSON.stringify(UpdatePriceData)
  })
  .then((res)=>res.json())
  .then((data)=>{
      console.log(data)
      alert("Price update")
  })
  .catch((err)=>console.log(err))
})

 
 