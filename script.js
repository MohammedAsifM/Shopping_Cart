const products = [
    {
        "id": 1,
        "name": "Eco-friendly Bamboo Toothbrush",
        "price": 199,
        "currency": "INR",
        "description": "A sustainable bamboo toothbrush with soft bristles, perfect for daily use. Reduce plastic waste with this eco-friendly alternative.",
        "image_url": "https://cdn.shopify.com/s/files/1/0560/4166/8681/products/Charcoal_New_4_87e90225-aa10-47ea-a80c-0ed05ae83ae7_295x.jpg?v=1649761036"
    },
    {
        "id": 2,
        "name": "Stainless Steel Water Bottle",
        "price": 499,
        "currency": "INR",
        "description": "A durable stainless steel water bottle that keeps beverages cold for 24 hours and hot for 12 hours. Ideal for travel, gym, or office.",
        "image_url": "https://www.milton.in/cdn/shop/files/Gripper_Bottle_700ml_Black_1.jpg?v=1701490401&width=900"
    },
    {
        "id": 3,
        "name": "Organic Cotton T-shirt",
        "price": 799,
        "currency": "INR",
        "description": "Comfortable and breathable organic cotton t-shirt available in various colors. Perfect for casual wear, made from 100% organic cotton.",
        "image_url": "https://brownliving.in/cdn/shop/products/mens-organic-cotton-polo-fabclo-1-mens-tshirt-brown-living-862049_300x.jpg?v=1682964591"
    }
];

let cart = [];

// Function to render products
function renderProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
            <img src="${product.image_url}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>₹${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    renderCart();
    updateCartCount();
}

// Function to remove product from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    renderCart();
    updateCartCount();
}

// Function to render cart
function renderCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    cartItemsDiv.innerHTML = '';
    let totalPrice = 0;

    cart.forEach(item => {
        const cartItemDiv = document.createElement('div');
        cartItemDiv.classList.add('cart-item');
        cartItemDiv.innerHTML = `
            <img src="${item.image_url}" alt="${item.name}">
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price}</p>
            </div>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItemsDiv.appendChild(cartItemDiv);
        totalPrice += item.price;
    });

    totalPriceElement.innerText = totalPrice;
}

// Function to update cart count in header
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.innerText = `(${cart.length})`;
}


renderProducts();
