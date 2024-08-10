// Define your products
const products = [
    { id: 1, name: "Product 1", image: "https://via.placeholder.com/150", description: "Description 1", price: "$10" },
    { id: 2, name: "Product 2", image: "https://via.placeholder.com/150", description: "Description 2", price: "$20" },
    { id: 3, name: "Product 3", image: "https://via.placeholder.com/150", description: "Description 3", price: "$30" },
    // Add more products here
];

// Function to render products
function renderProducts() {
    const productRows = document.getElementById('product-rows');
    productRows.innerHTML = '';

    products.forEach((product, index) => {
        const productCard = `
            <div class="col-3">
                <div class="card mb-3">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.description}</p>
                        <p class="card-text">${product.price}</p>
                        <a href="#" class="btn btn-primary">Buy Now</a>
                    </div>
                </div>
            </div>
        `;
        productRows.insertAdjacentHTML('beforeend', productCard);
    });
}

// Render initial products
renderProducts();
