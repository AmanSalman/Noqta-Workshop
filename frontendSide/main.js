const apiURL = "http://localhost:3000/api/products";

document.addEventListener("DOMContentLoaded", () => {
  const productContainer = document.getElementById("product-container");

  // Fetch data using Axios
  axios
    .get(apiURL)
    .then(response => {
      const products = response.data.products; // Assuming the API returns an array of products

      // Loop through the products and create product cards
      products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
          <img src="${product.image}" alt="${product.name}">
          <div class="flex-dev">
            <h2>${product.name}</h2>
            <p class="price">Price: $${product.price}</p>
            <button class="btn">Buy Now</button>
          </div>
        `;

        productContainer.appendChild(productCard);
      });
    })
    .catch(error => {
      console.error("Error fetching products:", error);
      productContainer.innerHTML = `<p>Error loading products. Please try again later.</p>`;
    });
});
