// Product data
const products = [
    { name: "Damascus Chef Knife", image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6" },
    { name: "Hand-Forged Cleaver", image: "https://images.unsplash.com/photo-1616627561790-4b2f8cb9c9ab" },
    { name: "Hunting Knife", image: "https://images.unsplash.com/photo-1604754742629-3e69a0efba8d" },
    { name: "Damascus Pocket Knife", image: "https://images.unsplash.com/photo-1562165024-478ba8d73a87" },
    { name: "Custom Engraved Knife", image: "https://images.unsplash.com/photo-1547406354-99a834d2898f" }
];

// Generate random price between $80 - $300
function randomPrice() {
    return `$${(Math.random() * (300 - 80) + 80).toFixed(2)}`;
}

// Inject products into the DOM
const gallery = document.querySelector('.product-grid');
products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');
    div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p class="price">${randomPrice()}</p>
        <button>Add to Cart</button>
    `;
    gallery.appendChild(div);
});
