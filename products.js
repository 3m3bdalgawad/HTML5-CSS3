var request = new XMLHttpRequest();
request.open("GET", "https://dummyjson.com/products?limit=0");
request.send();

request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    var response = JSON.parse(request.responseText);

    var mixedProducts = response.products.filter(product =>
      product.category === "furniture" || 
      product.category === "home-decoration"
    );

    var finalProducts = mixedProducts.slice(0, 12);

    console.log("العدد النهائي المتاح للعرض:", finalProducts.length);
    displayProducts(finalProducts);
  }
};

function displayProducts(products) {
  var productsContainer = document.getElementById("productsContainer");
  if (!productsContainer) return;

  productsContainer.innerHTML = "";

  products.forEach(product => {
    productsContainer.innerHTML += `
      <div class="product_card">
        <img src="${product.thumbnail}" alt="${product.title}">
        <div class="underimg">
          <p>${product.title}</p>
          <div class="underelement">
            <div class="left_underelement">
              <button onclick="addToCart(${product.id})">Add to cart</button>
            </div>
            <div class="right_underelement">
              <span>$${product.price}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  });
}
























