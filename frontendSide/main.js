const apiURL = "http://localhost:3000/api/products";

document.addEventListener('DOMContentLoaded', ()=>{
  const productContainer = document.getElementById('product-container')
  console.log(productContainer)
  axios.get(apiURL).then(response => {
    console.log(response)
    const products = response.data.products;
    products.forEach(prod =>{
      const card = document.createElement('div')
      card.classList.add('product-card');
      card.innerHTML = `
      <img src="${prod.image}" alt="${prod.name}"/>
      <div class="flex-dev">
      <h2>${prod.name}</h2>
      <p class="price"> price: ${prod.price}</p>
      <button class="btn">buy now</button>
      </div>
      `
       productContainer.appendChild(card)
    })
   
  }).catch(err =>{
      console.log("error fetching data")
      productContainer.innerHTML = `<p>error loading products , please try later</p>`
    })

})