const response = await fetch("api/products.json");
const products = await response.json();

function renderProducts(products) {
  let productsHTML = "";
  for (const product of products) {
    productsHTML += `
        <article class="buyable_products__card">
            <img
            class="buyable_products__image"
            src="${product.image}"
            alt="${product.title}"
        />
        <h2 class="buyable_products__card-title">${product.title}</h2>
        <p class="buyable_products__price">${product.price}</p>
        <a class="buyable_products__button" href="#">Add to cart</a>
        </article>
        `;
  }
  document.querySelector('.buyable_products__list').innerHTML = productsHTML;
}

renderProducts(products);
